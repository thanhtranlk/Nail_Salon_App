<template>
<main>
  <form v-on:submit.prevent>
    <div>
      <input id="name" type="text" v-model="clientName">
      <label for="name">Enter Your Name</label>
    </div>
    <div>
      <input id="phone" type="string" v-model="clientNumber" >
      <label for="phone">Enter Your Phone Number</label>
    </div>
    <div>
      <input id="phone" type="string" v-model="clientID" >
      <label for="phone">Enter Your Appoinment ID</label>
    </div>
    <div>
      <input id="day" type= "date" v-model="selectedDate">
      <label for="day">Select a Day</label>
    </div>
    <div>
      <input id="time" type= "time" v-model="selectedTime">
      <label for="time">Select a time</label>
    </div>
    <div>
      <input id="service" type="text" v-model ="selectedServices">
      <label for="name">Type in service</label>
    </div>
    <div>
    <input type="text" 
    placeholder="Enter your appoinemt ID"
   v-model="appointID">
    <button @click="DeleteAppoint">Cancel_Appointment</button>
</div>
    <!-- Button for data interaction -->
    <div>
      
      
      <button @click="SaveData">Save</button>
      <p> Enter different ID if data not saved</p>
    <button @click="DeleteAcc">Delete_Account</button>
    
    <button @click="outtahere">Logout</button>

    <button @click="DeleteAppoint">Cancel</button>

    </div>
    <div id="face" v-for="item in selectedClient" :key="item.phoneNumber">
    <div>Name: {{item.name}}</div>
    <div>ID: {{item.id}}</div>
    <div>Service: {{item.selectedServices}}</div>
    <div>{{item.date}}</div>
    <h3 class="truncate">{{item.time}}</h3>
  </div>

  <div class ="pie">
  <my-apexchart width="340" type="pie" :options="chartOptions" :series="series"></my-apexchart>
</div>

    <span class ="bottom">
    <router-link to="/about"> About</router-link> |
      <router-link to="/booking"> Book an Appointment</router-link> |
      <router-link to="/services"> Services</router-link>
    </span>
  </form>

  
</main>
  
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Services from './Services.vue';
import {
  getAuth,
  onAuthStateChanged,
  User,
  Auth,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  collection,
  Firestore,
  getDocs,
  doc,
  QueryDocumentSnapshot,
  QuerySnapshot,
  getDoc,
  DocumentSnapshot,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import {firebaseConfig} from "@/myconfig";
import {initializeApp, FirebaseApp} from "firebase/app";
import { getFirestore, setDoc } from 'firebase/firestore';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js'

type Client = {
  name: string;
  id: string;
  phoneNumber: string;
  date: any;
  time: any;
  selectedServices: string;

};


@Component
export default class Scheduling extends Vue {
  clientName="";
  clientNumber = "";
  clientID = "";
  selectedDate: any = null;
  selectedTime: any = null;
  selectedServices = "";
  selectedClient: Array<Client> = [];
  selectedSave: Array<Client> =[];
  appointID ="";

  userPhotoURL = "";
  auth: Auth | null = null;
  userInfo = "Thanh Tran";
  message = "";

mounted(): void {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user: User | null) => {
      console.log("Auth changed", user);
     
      
    });
    this.readData();
    this.SavePrice();
  }

readData(): void{
this.auth = getAuth();
//this.auth_backup = this.auth;
 //var uid = this.auth.currentUser!.uid;
 this.auth.onAuthStateChanged((user)=>{
if (user != null){
 const uid = user.uid;

var myapp: FirebaseApp = initializeApp(firebaseConfig);
    var db:Firestore = getFirestore(myapp);

   
 const myAppoint = collection (db, uid);
 getDocs(myAppoint).then((qs: QuerySnapshot) => {
    qs.forEach((qd: QueryDocumentSnapshot) => {
      console.log("From Firestore: ", qd.id, qd.data());
      const details = qd.data();
    this.selectedClient.push({ name:details.name, phoneNumber:details.phoneNumber, date: details.date, time:details.time, selectedServices:details.service, id:details.id});
       });
    });
}
 });
  }

SaveData(): void{
  //this.readData();
  const idCheck = this.selectedClient.map(object => object.id).indexOf(this.clientID);
  if (idCheck == -1) {
this.auth = getAuth();
var uid = this.auth.currentUser!.uid;

this.selectedClient.push({name:this.clientName, phoneNumber:this.clientNumber, date: this.selectedDate, time:this.selectedTime, selectedServices:this.selectedServices, id:this.clientID});

var myapp: FirebaseApp = initializeApp(firebaseConfig);
var db:Firestore = getFirestore(myapp);

// add a new document with our own uid
this.selectedClient.forEach(
    async (z: { name: string; phoneNumber: string; date: any; time: any; selectedServices: string; id:string; }) => {
      var d = doc(db, uid, z.id );
      await setDoc(d, {name: z.name, phoneNum: z.phoneNumber,date:z.date,time:z.time,service: z.selectedServices, id: z.id });
    }
  );

  }
  else{

    this.showMessage("Choose different ID for appointment");
  }
}


// Save data for price, all user have this data
SavePrice(): void{
  //this.readData();
var myapp: FirebaseApp = initializeApp(firebaseConfig);
var db:Firestore = getFirestore(myapp);

// add a new document with our own uid

      var d = doc(db, "perdicures", "service" );
       setDoc(d, {name1:"pedicure",name2:"shellac pedicure", name3:"polish change" });
       var e = doc(db, "perdicures", "price" );
       setDoc(e, {price1:"28",price2:"34", price3:"12" });
    }
    // read price data

    
 
 

// delete user data
DeleteAppoint(): void{
this.auth = getAuth();
var uid = this.auth.currentUser!.uid;

var myapp: FirebaseApp = initializeApp(firebaseConfig);
var db:Firestore = getFirestore(myapp);

const illi = doc(db, uid, this.appointID);
  deleteDoc(illi).then(() => {
    console.log("appointment deleted");
    this.selectedClient.splice(0, this.selectedClient.length);
    this.readData();

  });

}

public chartOptions = {
        chart: {
          width: 380,
          type: 'pie',
        },
       
        labels: ['Pedicure', 'Shellac Pedicure', 'Polish Change'],
        responsive:[{
          breakpoint: 480,
          options: {
            chart: {
              width: 700,

            },
            legend:{
              position: 'right',
            },
          },
        }],
        
      };
     public series =[28, 34, 12];
      
    






 showMessage(txt: string) {
    this.message = txt;
    // The message will automatically disappear after 5 seconds
    setTimeout(() => {
      this.message = "";
    }, 5000);
  }

  DeleteAcc(): void {
    this.auth = getAuth();
    var user = this.auth.currentUser;

    deleteUser(user!)
      .then(() => {
        this.showMessage(
          `Delete Account. Logging out`
        );
        this.outtahere();
      })
      .catch((error) => {
         this.showMessage(`Unable to delete account`);
      });
  }

outtahere(): void {
    if (this.auth) signOut(this.auth);

    // Back to the previous page
    // this.$router.push('login');
    this.$router.push({path: '/'});
  }


}
</script>
<style scoped>
label{
  font-family: 'Dancing Script',cursive;
  font-size: 2em;
}
div{
  float: top;
  padding: 1em;
  text-align: left;
}
.bottom {
    display: block;
    width: 80%;
    overflow: auto;
    color: black;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
}
/* this for displaying user appoinment*/
.truncate {
  max-width: 5em;
  white-space: nowrap; /* disable text wrap */
  overflow: hidden;
  text-overflow: ellipsis;
}
#face {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 1px;
  width: 6em;
 
}
#face:hover {
  transform: scale(1.05);
}
#face div {
  font-size: 70%;
}
.pie{
  position: absolute;
        top: 150px;
        right: 0px;
}

</style>
