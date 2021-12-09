import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios:Usuario []= [{id:1,nombre:"Beverie",apellido:"Heighton",correo:"bheighton0@linkedin.com",numtelf:"8681035003",direccion:"56 Bartillon Center",estaengrupo:true,coordinador:true},
  {id:2,nombre:"Hadlee",apellido:"Roy",correo:"hroy1@symantec.com",numtelf:"9443544806",direccion:"6006 Gina Avenue",estaengrupo:false,coordinador:true},
  {id:3,nombre:"Scott",apellido:"Corbin",correo:"scorbin2@admin.ch",numtelf:"3768625462",direccion:"95 International Point",estaengrupo:true,coordinador:true},
  {id:4,nombre:"Alisander",apellido:"Stobbe",correo:"astobbe3@cargocollective.com",numtelf:"4911189364",direccion:"35184 Dorton Terrace",estaengrupo:false,coordinador:true},
  {id:5,nombre:"Morten",apellido:"Cartman",correo:"mcartman4@jimdo.com",numtelf:"9146783145",direccion:"10 International Hill",estaengrupo:true,coordinador:false},
  {id:6,nombre:"Nelly",apellido:"Nares",correo:"nnares5@eepurl.com",numtelf:"8504633337",direccion:"56482 Kings Alley",estaengrupo:true,coordinador:false},
  {id:7,nombre:"Mollee",apellido:"Witterick",correo:"mwitterick6@europa.eu",numtelf:"4043366811",direccion:"8 Express Circle",estaengrupo:false,coordinador:false},
  {id:8,nombre:"Joell",apellido:"Purvey",correo:"jpurvey7@booking.com",numtelf:"4362459929",direccion:"8 Hudson Trail",estaengrupo:false,coordinador:true},
  {id:9,nombre:"Roxanne",apellido:"Raccio",correo:"rraccio8@github.com",numtelf:"3732868658",direccion:"9885 Quincy Point",estaengrupo:false,coordinador:true},
  {id:10,nombre:"Davis",apellido:"McCrum",correo:"dmccrum9@slashdot.org",numtelf:"9876786859",direccion:"477 Sommers Junction",estaengrupo:false,coordinador:false},
  {id:11,nombre:"Johnnie",apellido:"Braiden",correo:"jbraidena@stumbleupon.com",numtelf:"1103841835",direccion:"482 Vidon Trail",estaengrupo:false,coordinador:true},
  {id:12,nombre:"Salomon",apellido:"Fullager",correo:"sfullagerb@newyorker.com",numtelf:"1556026380",direccion:"25 Canary Lane",estaengrupo:false,coordinador:false},
  {id:13,nombre:"Fawnia",apellido:"Tsar",correo:"ftsarc@addtoany.com",numtelf:"4716091155",direccion:"01 Magdeline Court",estaengrupo:false,coordinador:true},
  {id:14,nombre:"Flori",apellido:"Birrane",correo:"fbirraned@wisc.edu",numtelf:"9231894458",direccion:"1962 Killdeer Center",estaengrupo:true,coordinador:true},
  {id:15,nombre:"Ulric",apellido:"Dahl",correo:"udahle@columbia.edu",numtelf:"6719252523",direccion:"15404 Rigney Terrace",estaengrupo:false,coordinador:true},
  {id:16,nombre:"Rachele",apellido:"Giovani",correo:"rgiovanif@google.com.au",numtelf:"1548669680",direccion:"7497 Ruskin Terrace",estaengrupo:true,coordinador:false},
  {id:17,nombre:"Rainer",apellido:"Cassels",correo:"rcasselsg@cmu.edu",numtelf:"7225721068",direccion:"06529 Novick Way",estaengrupo:false,coordinador:true},
  {id:18,nombre:"Tiler",apellido:"Doucette",correo:"tdoucetteh@mashable.com",numtelf:"1812588140",direccion:"44 Florence Point",estaengrupo:false,coordinador:false},
  {id:19,nombre:"Gabi",apellido:"Harmston",correo:"gharmstoni@amazon.com",numtelf:"1981398377",direccion:"13959 Lyons Avenue",estaengrupo:false,coordinador:false},
  {id:20,nombre:"Linda",apellido:"Castellani",correo:"lcastellanij@netvibes.com",numtelf:"2755456407",direccion:"1392 Basil Road",estaengrupo:false,coordinador:true},
  {id:21,nombre:"Wernher",apellido:"Zute",correo:"wzutek@toplist.cz",numtelf:"1085037657",direccion:"07593 Graceland Plaza",estaengrupo:true,coordinador:false},
  {id:22,nombre:"Darren",apellido:"O'Loughlin",correo:"doloughlinl@about.me",numtelf:"9522381488",direccion:"614 Longview Way",estaengrupo:true,coordinador:false},
  {id:23,nombre:"Reid",apellido:"Seakings",correo:"rseakingsm@columbia.edu",numtelf:"5752960471",direccion:"4 Mccormick Lane",estaengrupo:true,coordinador:true},
  {id:24,nombre:"Ester",apellido:"Snary",correo:"esnaryn@storify.com",numtelf:"6178320598",direccion:"93778 Corben Pass",estaengrupo:false,coordinador:false},
  {id:25,nombre:"Fiann",apellido:"Guerre",correo:"fguerreo@plala.or.jp",numtelf:"3107131706",direccion:"2 Hoard Road",estaengrupo:true,coordinador:true},
  {id:26,nombre:"Roosevelt",apellido:"Bullard",correo:"rbullardp@example.com",numtelf:"7202828015",direccion:"756 Nelson Point",estaengrupo:false,coordinador:true},
  {id:27,nombre:"Catarina",apellido:"Paszek",correo:"cpaszekq@vinaora.com",numtelf:"7424687021",direccion:"0 Fulton Parkway",estaengrupo:true,coordinador:false},
  {id:28,nombre:"Sheelagh",apellido:"Valeri",correo:"svalerir@cam.ac.uk",numtelf:"9631394344",direccion:"11591 Butternut Court",estaengrupo:true,coordinador:false},
  {id:29,nombre:"Law",apellido:"Farre",correo:"lfarres@nsw.gov.au",numtelf:"6944888606",direccion:"01 Sage Center",estaengrupo:true,coordinador:false},
  {id:30,nombre:"Marena",apellido:"Sellan",correo:"msellant@hubpages.com",numtelf:"6213363671",direccion:"058 Anzinger Trail",estaengrupo:false,coordinador:true},
  {id:31,nombre:"Sigismondo",apellido:"Willison",correo:"swillisonu@msu.edu",numtelf:"1003601200",direccion:"231 Novick Alley",estaengrupo:true,coordinador:true},
  {id:32,nombre:"Dotti",apellido:"Wragge",correo:"dwraggev@spiegel.de",numtelf:"1217144032",direccion:"3 Dovetail Hill",estaengrupo:true,coordinador:true},
  {id:33,nombre:"Eddi",apellido:"Russon",correo:"erussonw@sina.com.cn",numtelf:"1443701198",direccion:"59 Bartelt Hill",estaengrupo:true,coordinador:false},
  {id:34,nombre:"Christina",apellido:"Stearnes",correo:"cstearnesx@hatena.ne.jp",numtelf:"9627875981",direccion:"8953 Nancy Center",estaengrupo:true,coordinador:false},
  {id:35,nombre:"Fidela",apellido:"Closs",correo:"fclossy@kickstarter.com",numtelf:"4757847919",direccion:"1169 Rutledge Point",estaengrupo:true,coordinador:true}]
  constructor() { }
}
