const timers: { [k: string]: NodeJS.Timeout } = {};
let stopJobs = false;

export default function runEvery(timeout: number, func: () => void, ...params: any[]) {
  if (!stopJobs) {
    timers[func.name] = setTimeout(async () => {
      try {
        await func();
      } catch (e) {
        console.log(`error.running.job.function`, { name: func.name });
      } finally {
        if (!stopJobs) runEvery(timeout, func, params);
      }
    }, timeout);
  } else {
    Object.entries(timers).map(([, timer]) => clearTimeout(timer));
  }
}
