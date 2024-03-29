interface Calendar{
    name:string;
    addEvent(): void;
    removeEvent(): void;
}

class GoogleCalendar implements Calendar {
 
    constructor(public name:string){}
    addEvent(): void {
        
    }
    removeEvent(): void {
        
    }
}