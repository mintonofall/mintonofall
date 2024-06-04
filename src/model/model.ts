export interface Player {
    name: string;
    age: number;
    grade: string;
    gameCount: number;
    avatar: string;
}

export interface WatingPlayer {
    id:number;
    place:number;
    playerId:number;
    watingPlayer:Player;
    clubId:number;
    club:Club;

}

export interface Club {
    id:number;
    name:string;
    clubMasterId:number;
    clubMaster:Player;
    Members:Player[];
    
}