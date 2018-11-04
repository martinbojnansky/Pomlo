const getStartOfDay = (date: Date): Date => {
    let start = new Date(date);
    start.setHours(0, 0, 0, 0);
    
    return start;
}

const getStartOfWeek = (date: Date, firstDayOfWeek: number = 0): Date => {
    let currentDay = date.getDay(),
    diff = currentDay - firstDayOfWeek + (currentDay === 0 && firstDayOfWeek === 1 ? 7: 0),
    start = new Date(date);
    
    start.setDate(date.getDate() - diff);    
    return start;
}

export interface DayOfWeek {
    day: number;
    date: Date;
    name: string;
}

const getWeekDays = (date: Date, firstDayOfWeek: number = 0): DayOfWeek[] => {
    let startOfWeek = getStartOfWeek(date, firstDayOfWeek),
    days: DayOfWeek[] = [],
    dayNames = getWeekDayNames(firstDayOfWeek);

    for(let i = 0; i < 7; i++) {
        let date = new Date(startOfWeek);
        date.setDate(date.getDate() + i);

        let day: DayOfWeek = {
            day: i,
            date: date,
            name: dayNames[i]
        };

        days.push(day);
    }

    return days;
}

const getWeekDayNames = (firstDayOfWeek: number = 0): string[] => {
    let names: string[] = [];

    if(firstDayOfWeek === 1) {
        names.push('Monday');
    } else {
        names.push('Sunday', 'Monday');
    }

    names.push('Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    
    if(firstDayOfWeek === 1) {
        names.push('Sunday');
    }

    return names;
}

export default {
    getStartOfDay,
    getStartOfWeek,
    getWeekDays,
    getWeekDayNames
}