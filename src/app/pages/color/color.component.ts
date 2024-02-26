import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColourService } from '../../services/colour.service';
import { Colour } from '../../models/color';

@Component({
  selector: 'app-colour',
  standalone: true,
  imports: [NgFor , RouterLink],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent implements OnInit{

  colours : Colour[]
  currentColor : Colour

  constructor(private colorService : ColourService){}
  ngOnInit(): void {
    this.getColors()
  }


  getColors(){
    this.colorService.getColors().subscribe((response) =>{
      this.colours = response.data
    })
  }

  setCurrenColor(colour:Colour){
    this.currentColor = colour
  }

  setCurentColourActive(colour : Colour){
    if(colour == this.currentColor){
      return `list-group-item active`
    }else{
      return `list-group-item`
    }
  }


}
