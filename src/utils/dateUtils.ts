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
    return getStartOfDay(start);
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

const getMonthNames = (): string[] => {
    return [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
}

const toWeekDateString = (date: Date, firstDayOfWeek: number = 0): string => {
    let start = getStartOfWeek(date, firstDayOfWeek),
    end, current, next, prev,
    monthNames = getMonthNames();

    end = new Date(start);
    end.setDate(end.getDate() + 7);
    current = getStartOfWeek(new Date(), firstDayOfWeek);
    next = new Date(current);
    next.setDate(next.getDate() + 7);
    prev = new Date(current);
    prev.setDate(prev.getDate() - 7);

    if (start.getTime() === current.getTime()) {
        return 'This Week';
    }
    else if (start.getTime() === prev.getTime()) {
        return 'Last Week';
    }
    else if (start.getTime() === next.getTime()) {
        return 'Next Week';
    }
    else {
        return `${start.getDate()} ${monthNames[start.getMonth()].substring(0,3)} - ${end.getDate()} ${monthNames[end.getMonth()].substring(0,3)}`;
    }
}

const toWeekDayString = (date: Date, firstDayOfWeek: number = 0): string => {
    let dayNames = getWeekDayNames(firstDayOfWeek);
    return `${dayNames[date.getDay()].substring(0,3)} ${date.getDate()}`;
}

export default {
    getStartOfDay,
    getStartOfWeek,
    getWeekDays,
    getWeekDayNames,
    getMonthNames,
    toWeekDateString,
    toWeekDayString
}