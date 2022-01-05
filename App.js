// // import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import { StyleSheet, Text, View } from "react-native";

// // export default function App() {
// //   return (
// //     <View style={styles.myview}>
// //       <Text>Jai Ganesh</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   myview: {
// //     backgroundColor: "blue",
// //   },
// // });

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { SafeAreaView, StyleSheet, View, Image } from "react-native";
// import CarsList from "./components/CarsList";
// import Header from "./components/Header";
// import Home from './Home'
// import { SvgUri } from 'react-native-svg';

// export default function App() {

  

//   return (
//     <View style={styles.container}>
//       {/* <Image
//       source={require('./assets/images.jpeg')} 
//       style={styles.image}> */}
//       {/* <Header />
//       <CarsList />
//       <StatusBar style="auto" />
//        */}
//        {/* </Image> */}
//        <SvgUri
//         width="100%"
//         uri="https://www.highgateair.com.au/pub/static/version1639059163/frontend/Mgs/unero/en_AU/images/logo.svg"
//         />
//        <Home/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: "black",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   }
// });



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});