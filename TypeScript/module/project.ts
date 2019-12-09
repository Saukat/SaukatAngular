///<reference path="Repository.ts"/>
///<reference path="TeamA.ts"/>
///<reference path="TeamB.ts"/>

import {TeamAClass,TeamBClass} from "projectA";

class classfromTeamA implements TeamAClass{
    public print(){
        console.log("Team A class")
    }
}
class classfromTeamB implements TeamBClass{
    public print(){
        console.log("Team B class")
    }
}