import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  logos:Array<any>=[ 
                    
                     {url_tech:"https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
                     description:"Java"},
                     {url_tech:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
                     description:"Pyhton"},
                     {url_tech:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
                     description:"Angular.js"},
                     {url_tech:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
                     description:"Vue.js"},
                     {url_tech:"https://www.seekpng.com/png/full/385-3852777_ionic-icon-png.png",
                     description:"Ionic" },
                     {url_tech:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
                     description:'Bootstrap'},
                     { url_tech:"https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
                    description:"Tailwind" },
                    {url_tech:"https://quizizz.com/_media/questions/e300d82e-2498-43da-a4a4-d250faa7d251_90_90",
                    description:"MongoDB"},
                     {url_tech:"https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png",
                     description:"Mysql"},
                     {url_tech:"https://1000marcas.net/wp-content/uploads/2020/11/Oracle-logo.png",
                     description:"Oracle"},
                     {url_tech:"https://www.tech-bi.com/wp-content/uploads/2021/06/ms-sql-server-logo.png",
                     description:"SQLServer"},
                     {url_tech:"https://www.gstatic.com/devrel-devsite/prod/v7824338a80ec44166704fb131e1860a66ed443b0ce02adfe8171907535d63bde/firebase/images/touchicon-180.png",
                     description:"Firebase"},
                     {url_tech:"https://assets.zabbix.com/img/brands/aws_ec2.svg",
                     description:"EC2"},
                     {url_tech:"https://www.linode.com/wp-content/uploads/2021/02/Digital_Ocean_Logosm2.png",
                     description:"Droplet"},
                     {url_tech:"https://azure.microsoft.com/svghandler/virtual-machines-data-science-virtual-machines/?width=600&height=315",
                     description:"MV Azure"},
                     {url_tech:"https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
                     description:"Docker"},
                     {url_tech:"https://conocimientolibre.mx/wp-content/uploads/2019/04/logo-ubuntu.png",
                     description:"Ubuntu"},
                    ]
  constructor() { }

  ngOnInit(): void {
  }

}
