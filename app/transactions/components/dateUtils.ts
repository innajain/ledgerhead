// Date and time utility functions for transaction forms

export function getTodayDDMMYYYY() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function toDDMMYYYY(date: string | Date | undefined | null): string {
  if (!date) return getTodayDDMMYYYY();
  if (typeof date === 'string') {
    if (date.match(/^\d{2}\/\d{2}\/\d{4}$/)) return date;
    const d = new Date(date);
    if (!isNaN(d.getTime())) {
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    }
    return date;
  }
  const d = date as Date;
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function toHHMM(time: string | Date | undefined | null): string {
  if (!time) return '';
  if (typeof time === 'string') {
    const match = time.match(/^(\d{2}):(\d{2})/);
    if (match) return `${match[1]}:${match[2]}`;
    const d = new Date(time);
    if (!isNaN(d.getTime())) return d.toISOString().slice(11, 16);
    return '';
  }
  const d = time as Date;
  return d.toISOString().slice(11, 16);
}
