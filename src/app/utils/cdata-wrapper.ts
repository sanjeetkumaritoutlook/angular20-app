export function wrapCDataIfNeeded(obj: any): any {
  const CDATA_START = '<![CDATA[';
  const CDATA_END = ']]>';

  function isCDataWrapped(str: string): boolean {
    return typeof str === 'string' && str.trim().startsWith(CDATA_START) && str.trim().endsWith(CDATA_END);
  }

  function wrap(value: string): string {
    return `${CDATA_START}\n${value}\n${CDATA_END}`;
  }

  function process(key: string, value: any): any {
    const lowerKey = key.toLowerCase();
    if ((lowerKey.includes('manuscript_content') || lowerKey.includes('manuscript_body')) && typeof value === 'string') {
      return isCDataWrapped(value) ? value : wrap(value);
    }
    return value;
  }

  function traverse(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => traverse(item));
    } else if (typeof obj === 'object' && obj !== null) {
      const newObj: any = {};
      for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        const value = obj[key];
        newObj[key] = typeof value === 'object' && value !== null
          ? traverse(value)
          : process(key, value);
      }
      return newObj;
    }
    return obj;
  }

  return traverse(obj);
}
