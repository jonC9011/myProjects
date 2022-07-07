import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FoodService} from "../services/food.service";
import {EquipmentService} from "../services/equipment.service";
import {Food} from "../interfaces/Food";
import {Equipment} from "../interfaces/Equipment";
import {MuscleService} from "../services/muscle.service";
import {ExerciseService} from "../services/exercise.service";
import {ToastrService} from "ngx-toastr";
import {VideoService} from "../services/video.service";

@Component({
  selector: 'app-editaddmodal',
  templateUrl: './editaddmodal.component.html',
  styleUrls: ['./editaddmodal.component.scss']
})
export class EditaddmodalComponent implements OnInit {

  //@Input() selected: 'adduser' | 'edituser' | 'addfood' | 'editfood' | 'addequipment' | 'editequipment' = 'addequipment';
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  error: string = "";
  inputData: string[] = [];
  @Input() editItem: any;

  constructor(public foodService: FoodService, public equipmentService: EquipmentService, public muscleService: MuscleService, public exerciseService: ExerciseService, private toastr: ToastrService, public videoService: VideoService) { }

  ngOnInit(): void {
  }

  submitForm(inputData: any) {
    if(!inputData.valid) {
      console.error("Fields!!!!s")
      this.error = "Please fill in all of the fields.";
      return
    }
    if(this.selected === 'addequipment') {
      this.equipmentService.createEquipment( {name:inputData.value.name, type: inputData.value.type}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
        this.toastr.success("Equipment Added!")
      })
      this.deselect.emit('');
    } else if(this.selected === 'editequipment' && this.editItem) {
      this.equipmentService.updateEquipment(this.editItem.id, {name:inputData.value.name, type: inputData.value.type}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
        this.toastr.success("Equipment Updated!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'addfood') {
      this.foodService.createFood({
        foodName: inputData.value.name,
        calories: inputData.value.calories,
        protein: inputData.value.protein,
        totalCarbs: inputData.value.totalCarbs,
        sugar:inputData.value.sugar,
        dietaryFiber: inputData.value.dietaryFiber,
        totalFat: inputData.value.totalFat,
        satFats: inputData.value.saturatedFats,
        transFats: inputData.value.transFats,
        cholesterol: inputData.value.cholesterol,
        sodium: inputData.value.sodium,
        servingSize: inputData.value.servingSize
      }).subscribe(data => {
      }, message => {
        console.log(message.error.text);
        this.toastr.success("Food Added!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'editfood' && this.editItem) {
        this.foodService.updateFood(this.editItem.id, {
          foodName: inputData.value.name,
          calories: inputData.value.calories,
          protein: inputData.value.protein,
          totalCarbs: inputData.value.totalCarbs,
          sugar:inputData.value.sugar,
          dietaryFiber: inputData.value.dietaryFiber,
          totalFat: inputData.value.totalFat,
          satFats: inputData.value.saturatedFats,
          transFats: inputData.value.transFats,
          cholesterol: inputData.value.cholesterol,
          sodium: inputData.value.sodium,
          servingSize: inputData.value.servingSize
        }).subscribe(data => {
        }, message => {
          console.log(message.error.text);
          this.toastr.success("Food Updated!")
        })
      this.deselect.emit('');

    } else if(this.selected === 'addmuscles') {
      console.log(this.selected);
      this.muscleService.createMuscle( {muscleName:inputData.value.muscleName, muscleGroup: inputData.value.muscleGroup}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
        this.toastr.success("Muscle Added!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'editmuscles' && this.editItem) {
      this.muscleService.updateMuscle(this.editItem.id, {muscleName:inputData.value.muscleName, muscleGroup: inputData.value.muscleGroup}).subscribe(data => {

      }, message => {
        console.log(message.error.text);
        this.toastr.success("Muscle Updated!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'addexercises') {
      console.log(this.selected);
      this.exerciseService.getcreateExercises( {name:inputData.value.name, description: inputData.value.description,type:inputData.value.type}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
        this.toastr.success("Exercise Added!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'editexercises' && this.editItem) {
      console.log(this.selected);
      this.exerciseService.geteditExercises(this.editItem.id, {name:inputData.value.name, description: inputData.value.description,type:inputData.value.type}).subscribe(data => {

      }, message => {
        console.log(message.error.text);
        this.toastr.success("Exercise Updated!")
      })
      this.deselect.emit('');

    } else if(this.selected === 'addvideo') {
      this.videoService.createVideo( {videoName:inputData.value.videoName, author: inputData.value.author, link:inputData.value.link}).subscribe(data => {
      }, message => {
        console.log(message.error.text);
      })
      this.deselect.emit('');

    } else if(this.selected === 'editvideo' && this.editItem) {
      this.videoService.updateVideo(this.editItem.id, {videoName:inputData.value.videoName, author: inputData.value.author, link:inputData.value.link}).subscribe(data => {

      }, message => {
        console.log(message.error.text);
        this.toastr.success("Exercise Updated!")
      })
      this.deselect.emit('');

    }

  }
}
