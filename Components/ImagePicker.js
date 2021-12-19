// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform, Text ,StyleSheet    } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// // import PostText from './postText';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

 
// //   const [inputList, setInputList] = useState('')
// //   const [items, setItems] = useState([])
 
// // function listofItem(){
// //   setItems((oldItems)=>{
// //   console.log('old: ', oldItems)
// //   console.log('current: ', inputList)
// //     return  [...oldItems, inputList]
// //   })
// // }
// // items.map( (itemval, index)=>{
// //   return(
// // console.log('as', itemval))})
 
// //   useEffect(() => {
// //     (async () => {
// //       if (Platform.OS !== 'web') {
// //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //         if (status !== 'granted') {
// //           alert('Sorry, we need camera roll permissions to make this work!');
// //         }
// //       }
// //     })();
// //   }, []);

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     console.log(result);

// //     if (!result.cancelled) {
// //       setImage(result.uri);
// //     }
// //   };

// //   const openCamera = async () => {
// //     let result = await ImagePicker.launchCameraAsync({
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     console.log(result);

// //     if (!result.cancelled) {
// //       setImage(result.uri);
// //     }
// //   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <TextInput style={{borderWidth:1, width:300, height:200}} placeholder='Write Some Thing' 
//       onChangeText={(text)=>setInputList(text)}/>
//       <View style={{flexDirection:'row', marginTop:20}}>
//       <TouchableOpacity style={{marginHorizontal:20,}} onPress={openCamera}>
//       <Entypo name="camera" size={30} color="black" />
//          </TouchableOpacity>
//       <TouchableOpacity onPress={pickImage} style={{marginHorizontal:20,}}>
//       <AntDesign name="jpgfile1" size={30} color="black" />
//          </TouchableOpacity>
//       <TouchableOpacity style={styles.post} onPress={listofItem}>
//       <Text style={{color:'white',}}>Post</Text>
//          </TouchableOpacity>
         
//       </View>
//       {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
//       {/* <Button title="Open camera" onPress={openCamera} /> */}
      

//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }
// const styles =StyleSheet.create({
//   post:{
//     backgroundColor:'#0000ff',
//     marginHorizontal:20,
//     width:60,
//     height:30
//   }
// })
