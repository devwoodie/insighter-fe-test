export const dDayForm = (targetDateStr: string): number => {
    const currentDate: Date = new Date();
    const targetDate: Date = new Date(targetDateStr);
    const diffTime: number = targetDate.getTime() - currentDate.getTime();
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
};