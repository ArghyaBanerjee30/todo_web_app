import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  newId: number = 0;
  appointments: Appointment[] = [];

  ngOnInit() {
    const storedAppointments = localStorage.getItem("appointments");
    if(storedAppointments) {
      this.appointments = JSON.parse(storedAppointments);
    }
  }

  handleClick() {
    let newAppointment: Appointment = {
      id: ++this.newId,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate,
    }
    this.appointments.push(newAppointment);
    
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();

    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

  handleRemove(index: number) {
    if(index > -1 && index < this.appointments.length) {
      this.appointments.splice(index, 1);
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }
}