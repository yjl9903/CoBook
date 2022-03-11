import axios, { AxiosInstance } from 'axios';

import { DELETE, INSERT, UPDATE } from './constant';
import { AccountItem } from './types';

export type AccountPayload = Omit<AccountItem, 'timestamp'>;

export type InsertLogItem = {
  command: typeof INSERT;
  timestamp: string;
  fingerprint: string;
  item: AccountItem;
};

export type UpdateLogItem = {
  command: typeof UPDATE;
  timestamp: string;
  fingerprint: string;
  item: AccountItem;
  old: AccountItem;
};

export type DeleteLogItem = {
  command: typeof DELETE;
  timestamp: string;
  fingerprint: string;
  old: AccountItem;
};

export type LogItem = InsertLogItem | UpdateLogItem | DeleteLogItem;

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

  makeInsertLog(account: AccountPayload): InsertLogItem {
    const timestamp = new Date().toISOString();
    return {
      command: INSERT,
      timestamp,
      fingerprint: this.fingerprint,
      item: {
        ...account,
        timestamp
      }
    };
  }

  makeUpdateLog(account: AccountItem, patch: Partial<AccountItem>): UpdateLogItem {
    return {
      command: UPDATE,
      timestamp: new Date().toISOString(),
      fingerprint: this.fingerprint,
      item: {
        ...account,
        ...patch
      },
      old: {
        ...account
      }
    };
  }

  makeDeleteLog(account: AccountItem): DeleteLogItem {
    return {
      command: DELETE,
      timestamp: new Date().toISOString(),
      fingerprint: this.fingerprint,
      old: {
        ...account
      }
    };
  }

  async create(log: InsertLogItem): Promise<InsertLogItem> {
    const { data } = await this.api.post<InsertLogItem>(`/account/log`, log);
    if (CoBookClient.isResponseError(data)) {
      await this.handleError(data);
      throw data;
    }
    return data;
  }

  async update(log: UpdateLogItem): Promise<UpdateLogItem> {
    const { data } = await this.api.post<UpdateLogItem>(`/account/log`, log);
    if (CoBookClient.isResponseError(data)) {
      await this.handleError(data);
      throw data;
    }
    return data;
  }

  async delete(log: DeleteLogItem): Promise<DeleteLogItem> {
    const { data } = await this.api.post<DeleteLogItem>(`/account/log`, log);
    if (CoBookClient.isResponseError(data)) {
      throw data;
    } else {
      return data;
    }
  }

  async list(): Promise<LogItem[]> {
    const { data } = await this.api.get('/account/log');
    if (CoBookClient.isResponseError(data)) {
      await this.handleError(data);
      throw data;
    }
    return data.logs;
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
