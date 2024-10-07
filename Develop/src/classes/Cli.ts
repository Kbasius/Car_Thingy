// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
import Vehicle from "./Vehicle.js";



// define the Cli class
class Cli {
// TODO: update the vehicles property to accept Truck and Motorbike objects as well
// TODO: You will need to use the Union operator to define additional types for the array
// TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Motorbike | Truck)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

// TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Motorbike | Truck)[]) {
    this.vehicles = vehicles;
  }

// static method to generate a vin
  static generateVin(): string {
// return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

// method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }
  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
// TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Motorbike', 'Truck',] 
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
            // Create a car
            this.createCar();
// TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type            
        } else if (answers.vehicleType === 'Truck') {            
            this.createTruck(); 
        } else if (answers.vehicleType === 'Motorbike') {          
            this.createMotorbike(); 
        }
    });
  }
  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color.',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make.',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model.',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year.',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight.',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed.',
        },
      ])
      .then((answers) => {
        const car = new Car(
// TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
      Cli.generateVin(),
      answers.color,
      answers.make,
      answers.model,
      parseInt(answers.year),
      parseInt(answers.weight),
      parseInt(answers.topSpeed),
      []
      );
      // push the car to the vehicles array
      this.vehicles.push(car);
      // set the selectedVehicleVin to the vin of the car
      this.selectedVehicleVin = car.vin;
      // perform actions on the car
      this.performActions();
    });
}

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
        {
          type: 'list',
          name: 'diesel',
          choices: ['Yes', 'no'],
        },
        {
          type: 'list',
          name: 'snowPlow',
          choices: ['Yes', 'no'],
        },
      ])
// TODO: Use the answers object to pass the required properties to the Truck constructor      
      .then((answers) => {
        const truckInstance = new Truck(
      Cli.generateVin(),
      answers.color,
      answers.make,
      answers.model,
      parseInt(answers.year),
      parseInt(answers.weight),
      parseInt(answers.topSpeed),
      parseInt(answers.towingCapacity),
      answers.diesel,
      answers.snowPlow,
      [],
      );
    
// TODO: push the truck to the vehicles array
        this.vehicles.push(truckInstance);
        // TODO: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truckInstance.vin;
        // TODO: perform actions on the truck
        this.performActions();
      });
}

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        const motorbikeInstance = new Motorbike(
// TODO: Use the answers object to pass the required properties to the Motorbike constructor
      Cli.generateVin(),
      answers.color,
      answers.make,
      answers.model,
      parseInt(answers.year),
      parseInt(answers.weight),
      parseInt(answers.topSpeed),
      answers.frontWheelDiameter,
      answers.frontWheelBrand,
      answers.rearWheelDiameter,
      answers.rearWheelBrand,
      [],
      );    
// TODO: push the motorbike to the vehicles array
        this.vehicles.push(motorbikeInstance);
// TODO: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbikeInstance.vin;
// TODO: perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        const selectedVehicle = answers.vehicleToTow;
// TODO: check if the selected vehicle is the truck
        if (selectedVehicle.vin === truck.vin) {
// TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
          console.log(`I can't Tow myself!`);
          this.performActions();
// TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
        } else {
          console.log(`Towing vehicle: ${selectedVehicle.vin}`);
          this.performActions();
      }
    });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
// TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Select or create another vehicle',
            'Tow',
            'Wheelie',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
// TODO: add statements to perform the tow action only if the selected vehicle is a truck. 
// TODO: Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. 
// TODO: After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.          
        } else if (answers.action === 'Tow Vehicle') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              if(this.vehicles[i] instanceof Truck) {
                this.findVehicleToTow((this.vehicles[i] as Truck));
                return;
              } else {
                console.log('This Vehicle cannot do that!');
              }
            }
          }
        }  
// TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'Wheelie') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              if (this.vehicles[i] instanceof Motorbike) {
                console.log('Performing a wheelie!');
                return;
              } else {
                console.log('This Vehicle cannot do that!');
                return;
              }
            }
          }
        } else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
