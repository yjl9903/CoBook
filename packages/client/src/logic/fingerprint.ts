async function withToken(token: string) {
  const FingerprintJS = await import('@fingerprintjs/fingerprintjs-pro');
  const task = await FingerprintJS.load({
    token,
    region: 'ap'
  });
  return await task.get();
}

async function withoutToken() {
  const FingerprintJS = await import('@fingerprintjs/fingerprintjs');
  const task = await FingerprintJS.load();
  return await task.get();
}

const fpPromise = __FingerprintJS__ ? withToken(__FingerprintJS__) : withoutToken();

export async function fingerprint() {
  try {
    return await fpPromise;
  } catch (error) {
    return await withoutToken();
  }
}
