export const dDayForm = (targetDateStr: string): number => {
    const currentDate: Date = new Date();
    const targetDate: Date = new Date(targetDateStr);
    const diffTime: number = targetDate.getTime() - currentDate.getTime();
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
};

export const dateForm = (date: Date | null): string | undefined => {
    if(date instanceof Date){
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}.${month}.${day}`;
    }
}