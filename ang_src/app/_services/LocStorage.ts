import { Injectable } from '@angular/core';

import { WindowRef } from './WindowRef';

@Injectable()
export class LocStorage {
    
    _window;
    currentDay:number;
    currentMonth:number;
    currentYear:number;
    todayDate:number;

    constructor(private winRef: WindowRef) {
        this._window = winRef.nativeWindow;
        this.currentDay = new Date().getUTCDate(); // get the current UTC(GMT) day in the current UTC(GMT) month
        this.currentMonth = new Date().getUTCMonth(); // get the current UTC(GMT) month
        this.currentYear = new Date().getFullYear(); // get the current UTC(GMT) month
        this.todayDate = new Date(Date.UTC(this.currentYear, this.currentMonth, this.currentDay)).getTime();
    }

    addDays(date, days) {
        let newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }
    // save value to localStorage
    saveToStorage(key, value) {
        if (key && value) {
            let objForStorage = {
                'data': value,
                'saveDate': this.todayDate
            };
            try {
                this._window.localStorage[key] = JSON.stringify(objForStorage);
            }
            catch (e) {
                console.log('Could not save data to localStorage! Error:', e);
                return false;
            }
        }
        return true;
    }
    // check if there is value saved for the given key
    isSaved(key) {
        if (this._window.localStorage[key]) {
            let savedDate:number = -1, dateObj = new Date(JSON.parse(this._window.localStorage[key]).saveDate);
            savedDate = this.addDays(dateObj, 15).getTime();
            return this.todayDate < savedDate ? true : false;
        }
        return false;
    }
    // retrive a saved  value
    getFromStorage(key) {        
        if (this._window.localStorage[key])
            return JSON.parse(this._window.localStorage[key] || {});
        return false;
    }
    // deletes a value from localStorage
    deleteValue (key) {
        if (this._window.localStorage.removeItem(key))
            this._window.localStorage.removeItem(key);
    };

    // deletes the entire localStorage (use carefully)
    deleteStorage () {
        this._window.localStorage.clear();
    };
}