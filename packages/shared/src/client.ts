import axios, { AxiosInstance } from 'axios';
import { AccountItem } from './types';

type AccountPayload = Omit<AccountItem, 'fingerprint' | 'timestamp'>;

type ErrorHandler = (err: any) => Promise<void>;

export class CoBookClient {
  private readonly fingerprint: string;

  private readonly api: AxiosInstance;

  private errorHandler: ErrorHandler[] = [];

  constructor(baseURL: string, authorization: string, fingerprint: string) {
    this.fingerprint = fingerprint;
    this.api = axios.create({ baseURL, headers: { Authorization: authorization } });
  }

  async validate(): Promise<boolean> {
    try {
      await this.api.get('/');
      return true;
    } catch {
      return false;
    }
  }

  async create(account: AccountPayload): Promise<AccountItem> {
    const { data } = await this.api.post('/account', {
      ...account,
      fingerprint: this.fingerprint,
      timestamp: new Date().getTime()
    });
    if (CoBookClient.isResponseError(data)) {
      await this.handleError(data);
      throw data;
    }
    return data;
  }

  async list(): Promise<AccountItem[]> {
    const { data } = await this.api.get('/accounts');
    if (CoBookClient.isResponseError(data)) {
      await this.handleError(data);
      throw data;
    }
    return data.accounts;
  }

  private static isResponseError(resp: any) {
    return !resp || resp.status === 'ERROR';
  }

  onError(fn: (err: any) => Promise<void>) {
    this.errorHandler.push(fn);
  }

  private async handleError(err: any) {
    await Promise.all(this.errorHandler.map((fn) => fn(err)));
  }
}
