import { Injectable } from '@angular/core';
import { Theme, light, dark, defaultTheme, green, pink, purple } from '../interfaces/ThemeInterface';

@Injectable({
    providedIn : 'root',
})

export class ThemeServiceService{

    //todo private active : theme;
    private active!: Theme;
    private availableThemes : Theme[] = [
        light,
        dark,
        defaultTheme,
        green,
        pink,
        purple
    ];

    constructor() {}

    setDefaultTheme(){
        this.setActiveTheme(defaultTheme);
    }

    setPurple(){
        this.setActiveTheme(purple);
    }

    setGreen(){
        this.setActiveTheme(green);
    }

    setPink(){
        this.setActiveTheme(pink);
    }
    setDarkTheme(){
        this.setActiveTheme(dark);
    }
    setLightTheme(){
        this.setActiveTheme(light);
    }

    setActiveTheme(theme:Theme):void {
        this.active = theme;

        Object.keys(this.active.properties).forEach((property)=>{
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}