
import React, { Component  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground ,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert, FlatList,Picker,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AntDesign , Entypo } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from 'react-native-datepicker';


export default class homepage extends Component {
  state={
 currunt_date:'',
 onChangeText:8778,
 onChangeText2:"Payment",
 NOC: '0',
 NOCh: '0',
 //defnumber: '0',
 check:false,
 TotalCashes:0,
 TotalCjeques:'0',
 dates:new Date().getDate()+"-"+(new Date().getMonth() + 1)+"-"+new Date().getFullYear(),
 Cash:[],
 Cheques:[],
 picked:1.5,
  }

  
  componentWillMount() {
   
 
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    
    let x=date + '/' + month + '/' + year ;
   this.setState({currunt_date:x})
    

}

addcash = (nc,item) => {
  let copied = [];
//console.log("item"+item+"nc"+nc);
  for (var i = 0; i < this.state.Cash.length; i++) {
    copied.push(this.state.Cash[i]);
  }



  for (var i = 0; i < copied.length; i++) {
    if(copied[i].numC==item){
      copied[i].cashAmount=nc;
      let x= this.state.TotalCashes;

      let a =parseInt(nc)
      x+=a;
      this.setState({TotalCashes:x})
     // console.log( 'copied[i].cashAmount'+ copied[i].cashAmount);

}
   } 
   this.setState({ Cash: copied }) ;

  }

  addcheques = (nc,item) => {
    let copied = [];
  //console.log("item"+item+"nc"+nc);
    for (var i = 0; i < this.state.Cheques.length; i++) {
      copied.push(this.state.Cash[i]);
    }
  
  
  
    for (var i = 0; i < copied.length; i++) {
      if(copied[i].numC==item){
        copied[i].cashAmount=nc;
       // console.log( 'copied[i].cashAmount'+ copied[i].cashAmount);
  
  }
     } 
     this.setState({ Cheques: copied }) ;
  
    }

  setPicked=(itemValue,nc) =>{
    let copied = [];
  console.log("item"+itemValue+"nc"+nc);
    for (var i = 0; i < this.state.Cash.length; i++) {

      copied.push(this.state.Cash[i]);
    }
  

  
    for (var i = 0; i < copied.length; i++) {
   // console.log(copied[0]);

      if(copied[i].numC==nc){

        copied[i].currancy=itemValue;

       // console.log( 'copied[i].currancy'+ copied[i].currancy);
  
  }
     } 
     this.setState({ Cash: copied }) ;
  
    }

addRow = () => {
  var n=this.state.NOC;
  n++;
  let copied = [];
  this.setState({NOC:n})


  for (var i = 0; i < this.state.Cash.length; i++) {
    copied.push(this.state.Cash[i]);


  }


copied.push({numC:n,cashAmount:0.0,currancy:"NIS"});

this.setState({ Cash: copied }) ;



}
addRow2 = () => {
  var n=this.state.NOCh;
  n++;
  let copied = [];
  this.setState({NOCh:n})

///////////////////
  for (var i = 0; i < this.state.Cheques.length; i++) {
    copied.push(this.state.Cheques[i]);


  }


copied.push({numCh:n,cashAmount:0.0,currancy:"NIS"});

this.setState({ Cheques: copied }) ;



}

removeRow=(nm) =>{
  let copied = [];
console.log("item"+itemValue+"nc"+nc);
     for (var i = 0; i < this.state.Cash.length; i++) {
 
       copied.push(this.state.Cash[i]);
     }
   
 
   
     for (var i = 0; i < copied.length; i++) {
       if(copied[i].numC==nc){
     let newc =copied.filter(val=>val !=copied[i])
   
   }
      } 

      for (var i = 0; i < copied.length; i++) {
 
      consol.log(copied[i]);
      }

      this.setState({ Cash: newc }) ;

  
}






///////////////////////////////////////////////////////////////////
  render() {
    return (
   <View style={styles.MainContainer}>


<View style={ styles.FirstContainer }> 
<View style={ styles.FirstContainer1 }>


<View   >
<Text style={styles.name }> Name :   </Text>
  </View> 
<View  >
  <Text style={styles.name2 }> Micheal-Micheal </Text>
   </View>                   
   <View style={styles.verticleLine}></View>

   <View  >
  <Text style={styles.name }> Date: </Text>
   </View>  
   <View  >
  <Text style={styles.name2 }> {this.state.currunt_date} </Text>
   </View> 
   <View style={styles.verticleLine}></View>

   <View  >
  <Text style={styles.name }> Voucher Number:  </Text>
   </View>  
   <View  >
   <TextInput
        style={styles.input}
        onChangeText={this.state.onChangeText}

        value='8778'
      />
   </View> 
   </View>

   <View style={ styles.FirstContainer3 }>
   <View  >
  <Text style={styles.lable1 }> In Exchage for :  </Text>
   </View> 
   </View>

   <View style={ styles.FirstContainer2 }>
<View   >
<Text style={styles.balance }> Balance: 0   </Text>
  </View>  
<View  >

<RadioButton
       label="Cash Discount"
        value="true"
        style={{ color: 'black',}}
        status={ this.state.check == true ? 'checked': 'unchecked'  }
        onPress={() => this.setState({check:!this.state.check})}
      />


   </View>                   
   <View   >
<Text style={styles.balance2 }> Cash Discount   </Text>
  </View> 
   <View style={styles.verticleLine2}></View>


   
   <View  >
   <TextInput
   
        style={styles.input3}

        value='Payment'
      />
   </View> 
   </View>


   </View>


   <View style={ styles.SecondContainer }> 
   <View style={ styles.SecondContainer1 }>
  
   <View style={ styles.CText1}>
   <Text style={styles.Text1 }> Cash </Text>
   </View>

   <View>
   <Text style={styles.Text2 }>Number Of Cashes:</Text>
   </View>

   <View>

   <Text style={styles.input3 }>{this.state.NOC}</Text>

 
   
   </View>

   <View>
   <Text style={styles.Text2 }>Total Cashes:</Text>
   </View>

   <View>
   <Text style={styles.input7 }>{this.state.TotalCashes}</Text>

   
   
   </View >
   <View   backgroundColor='#BDC3C7'        >
   <TouchableOpacity style={[styles.buttonContainer]}
   onPress={() => this.addRow()}
   
   
   
   >    
  <AntDesign name="plus" size={24} color="#F5B041" backgroundColor='#BDC3C7'/>
          </TouchableOpacity>
   </View>
   </View>



   <View style={ styles.SecondContainer2 }>

   <FlatList
          data={this.state.Cash}
          renderItem={({ item }) => 


          
          <View style={styles.list }>


<View  >
      
  <Text style={styles.title }> {item.numC} </Text>

     </View>      


     <View  >
     <TextInput
        style={styles.input4}
        onChangeText={(nc) => this.addcash(nc,item.numC)}


      /> 
</View> 


<View  >

<Picker
        selectedValue={this.state.picked}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue) =>  this.setPicked(itemValue,item.numC)
        
        }>

        <Picker.Item label='USD' value={'USD'} />
        <Picker.Item label='CAD' value={'CAD'} />
        <Picker.Item label='JOD' value={'JOD'} />
        <Picker.Item label='NIS' value={ 'NIS'} />
       
</Picker>
</View> 



<View   backgroundColor='red'        >
   <TouchableOpacity style={[styles.buttonContainer2]}
  onPress={() => this.removeRow(item.numC)}
   
   
   
   >    
   <Entypo name="cross" size={24} color="#ffffff" backgroundColor='red' />
          </TouchableOpacity>
   </View>

     
          </View>}


        />
   </View>
   </View>













   <View style={ styles.thirdContainer }> 
   <View style={ styles.thirdContainer1 }>
  
   <View style={ styles.CText1}>
   <Text style={styles.Text1 }> Cheques</Text>
   </View>

   <View>
   <Text style={styles.Text2 }>NumberOf Cheques:</Text>
   </View>

   <View>

   <Text style={styles.input6 }>{this.state.NOCh}</Text>

 
   
   </View>

   <View>
   <Text style={styles.Text2 }>Total Amount:</Text>
   </View>

   <View>
   <Text style={styles.input7 }>{this.state.TotalCjeques}</Text>

   
   
   </View >
   <View   backgroundColor='#BDC3C7'        >
   <TouchableOpacity style={[styles.buttonContainer]}
   onPress={() => this.addRow2()}
   
   
   
   >    
  <AntDesign name="plus" size={24} color="#F5B041" backgroundColor='#BDC3C7'/>
          </TouchableOpacity>
   </View>
   </View>



   <View style={ styles.thirdContainer2 }>








   <FlatList
          data={this.state.Cheques}
          renderItem={({ item }) => 


          
          <View style={styles.list }>


<View  >
      
  <Text style={styles.title }> {item.numCh} </Text>

     </View>      


     <View  >
     <TextInput
        style={styles.input10}
        onChangeText={(nc) => this.addcheques(nc,item.numCh)}


      /> 
</View> 

<View  >

<Picker
        selectedValue={this.state.picked}
        style={{ height: 50, width: 50 }}
        onValueChange={(itemValue) =>  this.setPicked(itemValue,item.numC)
        
        }>

        <Picker.Item label='USD' value={'USD'} />
        <Picker.Item label='CAD' value={'CAD'} />
        <Picker.Item label='JOD' value={'JOD'} />
        <Picker.Item label='NIS' value={ 'NIS'} />
       
</Picker>
</View> 


<View  >
     <TextInput
        style={styles.input10}
     //   onChangeText={(nc) => this.addcheques(nc,item.numC)}


      /> 
</View> 


<View  >

<Picker
        selectedValue={this.state.picked}
        style={{ height: 50, width: 50 }}
        onValueChange={(itemValue) =>  this.setPicked(itemValue,item.numC)
        
        }>

        <Picker.Item label='CAP' value={'CAP'} />
        <Picker.Item label='PIB' value={'PIB'} />
        <Picker.Item label='QD' value={'QD'} />
        <Picker.Item label='PBC' value={ 'PBC'} />
       
</Picker>
</View> 

<View  >

<Picker
        selectedValue={this.state.picked}
        style={{ height: 50, width: 50,fontSize:5 }}
        onValueChange={(itemValue) =>  this.setPicked(itemValue,item.numC)
        
        }>

        <Picker.Item label='eee' value={'eee'} />
        <Picker.Item label='ccc' value={'ccc'} />
        <Picker.Item label='ddd' value={'ddd'} />
        <Picker.Item label='zzz' value={ 'zzz'} />
       
</Picker>
</View> 



<DatePicker
          style={{ width: 90 ,borderColor:'#DA70D6'}}
          date={this.state.dates} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"

          minDate="01/12/2019"
          maxDate="01/01/2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 30,
            },
          }}
          onDateChange={date => {
            this.setState( { dates: date,alldate:new Date() });
          }}
        />













<View   backgroundColor='red'        >
   <TouchableOpacity style={[styles.buttonContainer2]}
  onPress={() => this.removeRow(item.numC)}
   
   
   
   >    
   <Entypo name="cross" size={24} color="#ffffff" backgroundColor='red' />
          </TouchableOpacity>
   </View>

     
          </View>}


        />
   </View>
   </View>


















     
    
    
    
    
      </View>
    );
  }}


  const styles = StyleSheet.create({
    MainContainer: {
    //  flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    FirstContainer: {
      borderColor: '#ffffff',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 1,
      borderWidth: 4,
      width:'100%'      ,
      marginTop:7     ,
      height:80 ,
      alignItems: 'baseline', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 50,
      elevation: 3,
    },
      SecondContainer: {
      borderColor: '#ffffff',
      borderStyle: 'solid',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderWidth: 1,
      marginTop:7     ,
      height:90 ,
      alignItems: 'baseline', 

    },
    thirdContainer: {
      borderColor: '#ffffff',
      borderStyle: 'solid',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 1,
      borderWidth: 1,
      marginTop:7     ,
      height:200 ,
      alignItems: 'baseline', 

    }, 



    FirstContainer1: {
     
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width:'100%'      ,
      height:30 ,
      flexDirection: 'row',
      alignItems: 'baseline', 
    },
    SecondContainer1: {
      backgroundColor:'#BDC3C7',
      borderBottomColor: '#ffffff',
      borderColor:'#ffffff',
      borderBottomWidth: 1,
     width:360,
      height:35 ,
      flexDirection: 'row',
      alignItems: 'baseline', 
      borderRadius: 50,
      borderWidth:1

    },
    thirdContainer1: {
      backgroundColor:'#BDC3C7',
      borderBottomColor: '#ffffff',
      borderColor:'#ffffff',
      borderBottomWidth: 1,
     width:360,
      height:35 ,
      flexDirection: 'row',
      alignItems: 'baseline', 
      borderRadius: 50,
      borderWidth:1

    },
    SecondContainer2: {
 
      height:50 ,
      flexDirection: 'row',

    },
    FirstContainer2: {
     
      width:'100%'      ,
      height:40 ,
      flexDirection: 'row',
      alignItems: 'baseline', 
    },
    thirdContainer2: {
 
      height:300 ,
      flexDirection: 'row',

    },
    FirstContainer2: {
     
      width:'100%'      ,
      height:40 ,
      flexDirection: 'row',
      alignItems: 'baseline', 
    },
    FirstContainer3: {
      width:'100%'      ,
paddingTop:2,
      height:10 ,
      flexDirection: 'row',
      alignItems: 'flex-end', 
      justifyContent: 'flex-end'
    },
    name: {
      flexDirection: 'row',
      alignItems: 'center', 

      fontSize: 11,
      color:'#DE3163',
    },
    name2:    {
      flexDirection: 'row',

      fontSize: 11,
      color:'#000000',
    },
    input: {
      height: 20,
      fontSize: 10,
      padding: 5,
      width:40,
      borderWidth: 1,
      //padding: 10,
      backgroundColor:"#ffffff"
      ,borderRadius:3
    }
,
input2: {
  borderColor:"#ffffff",
  borderBottomColor:'#000000',
  backgroundColor:"#ffffff",
  height: 20,
  fontSize: 10,
  padding: 5,
  width:60,
  borderWidth: 1,
  justifyContent: 'flex-end', 
  marginLeft:10,

  //padding: 10,
}
,
    balance:  {
      flexDirection: 'row',
paddingLeft:12,
      fontSize: 11,
      color:'#000000',
    },
    balance2:  {
      flexDirection: 'row',
      fontSize: 11,
      color:'#000000',
    },

    lable1: {
      justifyContent: 'flex-end', 
      alignSelf: 'flex-end' ,
      textAlign: 'right',
      alignItems: 'flex-end',
      fontSize: 6,
      color:'#000000',
      marginRight:60,
    },
    verticleLine: {
      height: '50%',
      width: 1,
      backgroundColor: '#909090',
    },
    verticleLine2: {
      height: '50%',
      width: 1,
      backgroundColor: '#909090',
      marginLeft:50
    },

    cText1:{
      flexDirection: 'row',
     backgroundColor:'#BDC3C7',
      overflow: 'hidden',
      width:'100%'      ,
      height:50 ,
      alignItems: 'center', 
     justifyContent: 'center', 

    },
    Text1:{
      paddingTop:6,
      flexDirection: 'row',
      alignItems: 'center', 

      fontSize: 10,
      backgroundColor:'#DE3163',
     color:'#000000',
     height:30 ,
     borderRadius: 100,

    },
    Text2:{
      paddingBottom:4,

      flexDirection: 'row',
      alignItems: 'center', 
      fontSize:10,
     color:'#000000',
     justifyContent: 'center', 

    },


    input3: {
      borderColor:"#ffffff",
      backgroundColor:"#ffffff",
      borderBottomColor:"#000000",
      height: 25,
      fontSize: 10,
      padding: 5,
      width:60,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center', 

      marginLeft:20,
    
      paddingLeft: 10,
    }
    ,
    input7: {
      borderColor:"#ffffff",
      backgroundColor:"#ffffff",
      height: 25,
      fontSize: 10,
      padding: 5,
      width:60,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center', 

      marginLeft:9,
    
      paddingLeft: 10,
    }
    ,
    input6: {
      borderColor:"#ffffff",
      backgroundColor:"#ffffff",
      height: 25,
      fontSize: 10,
      padding:1,
      width:60,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center', 

      marginLeft:5,
    
      paddingLeft: 10,
    }
    ,
    input4: {
      borderColor:"#000000",
      backgroundColor:"#ffffff",
      height: 25,
      fontSize: 10,
      width:170,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      marginLeft:1,
    
    }
    ,
    input10: {
      borderColor:"#000000",
      backgroundColor:"#ffffff",
      height: 25,
      fontSize: 10,
      width:25,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      marginLeft:1,
    
    }
    ,
    drop1: {
      borderColor:"#000000",
      height: 10,
      fontSize: 5,
      width:100,
      justifyContent: 'center', 
      alignItems: 'center', 
      marginLeft:2,
    
    },
    buttonContainer: {
      height:25,
      flexDirection: 'row',
    backgroundColor:'#DE3163',
      justifyContent: 'center',
      alignItems: 'center',
      width:25,
     
      marginLeft:2,
      borderRadius:3,
      fontSize:  25,
  
  
    },

    buttonContainer2: {
      height:25,
      flexDirection: 'row',
    backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center',
      width:25,
     
    marginLeft:-2,
      borderRadius:3,
      fontSize:  25,
  
  
    },
    title: {
      flexDirection: 'row',

      fontSize: 15,
      fontWeight: 'bold',
      color:'#4B0082',
      backgroundColor:"#27AE60",
      width:15,
      height:20,
      color:"#ffffff"
     
    },

    list: {
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderStyle: 'solid',
      borderWidth: 4,
      height:45,
     flexDirection:'row',
    
      paddingLeft: 10,
      elevation: 1,
     alignItems:'center',
   
  
  },
  
  });