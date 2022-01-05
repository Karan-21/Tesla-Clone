// import React,{useState,useEffect} from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const baseUrlCustomerApi =
//   'https://magento-695251-2296763.cloudwaysapps.com/index.php/rest/V1/ak-configurations/getconfigs';

// export default function Home() {
//     const [text1, setText1] = useState('');
//     const [text2, setText2] = useState('');
//     const [text3, setText3] = useState('');
//     const [currentlyCopiedText, setCurrentlyCopiedText] = useState(0);

//     useEffect(() => {
//       API_Call();
//     }, []);
//     const API_Call = async () => {
//       let response = await fetch(baseUrlCustomerApi);
//       let json = await response.json();
//       json = JSON.parse(json);
//       setText1(json.client_id);
//       setText2(json.client_secret);
//       setText3(json.base_url);
//     };
//     return (
//       <>
//         <View>
//             <Text style={styles.heading}
//             >DYNAMICS 365 CREDENTIALS</Text>

//             <Text style={styles.contain}
//             >Client ID: {text1}</Text>

//             <Text style={styles.contain}
//             >Client Secret: {text2}</Text>

//             <Text style={styles.contain}
//             >Base URL : {text3}</Text>
//         </View>
//       </>
//     );
//   };

// const styles = StyleSheet.create({
//     heading:{
//         fontSize: 22,
//         fontWeight: '600',
//         color: 'red',
//         marginBottom: 15,
//         marginTop: 100,
//         padding:25
//     },
//     contain:{
//         fontSize: 22,
//         fontWeight: '600',
//         marginVertical: 20,
//         padding:25
//     }
// })


// import React,{useState, useEffect} from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // const apiurl = "https://magento-695251-2296763.cloudwaysapps.com/index.php/rest/V1/ak-configurations/getconfigs";

// const apiurl = "http://magento-695251-2296763.cloudwaysapps.com/index.php/rest/V1/ak-configurations/getconfigs";

// export default function Home() {

//   const [isloading, setLoading] = useState(false);
//   const [text1, setText1] = useState('');
//   const [text2, setText2] = useState('');
//   const [text3, setText3] = useState('');

//   useEffect(() => {
//     fetchapi();
//   }, [])

//   const fetchapi = async () =>
//   {
//     let res = await fetch(apiurl);
//     let json1 = await res.json();
//     json1 = JSON.parse(json1);
//     setText1(json1.client_id);
//     setText1(json1.client_secret);
//     setText1(json1.base_url);
//     setLoading(true);
//   };

//   return (
//     <>
//       <View>
//         <Text style={styles.heading}>
//           Dynamics 365 Credintials
//         </Text>

//         <Text style={styles.fields}>Client ID: {text1}</Text>

//         <Text style={styles.fields}>Client Secret: {text2}</Text>

//         <Text style={styles.fields}>Base URL: {text3}</Text>

//       </View>
//      </>
//   );
// }


// const styles = StyleSheet.create({
//   heading:{
//     color:"red",
//     fontSize: 25,
//     marginBottom:30,
//     fontWeight:'600',
//     padding:10
//   },

//   fields:{
//     marginBottom:10,
//     fontSize:20,
//     padding:10
//   }
// })


























import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function componentName() {

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')


  const fetchapi = async () =>{

    let result = await fetch("https://magento-695251-2296763.cloudwaysapps.com/index.php/rest/V1/ak-configurations/getconfigs");

    let res = await result.json();

    res = JSON.parse(res);

    setText1(res.client_id);
    setText2(res.client_secret);
    setText3(res.base_url);
    setText4(res.selgar_stock_quantity);

  }

  useEffect(() => {
    fetchapi()
  }, [])

  return (
    <View style={styles.main}>
      
      <Text style={styles.contain}>Dynamics 365 Credencial Jai Sri Ram</Text>

      <Text style={styles.text}>Client ID: <Text style={styles.field}>{text1}</Text></Text>
      <Text style={styles.text}>Client Secret: <Text style={styles.field}>{text2}</Text></Text>
      <Text style={styles.text}>Base URL: <Text style={styles.field}>{text3}</Text></Text>
      <Text style={styles.last}>Selgar Stock Quantity: <Text style={styles.field}>{text4}</Text></Text>

      <Text style={styles.footer}>&copy; Copyright 2021 Hightgate Air</Text>

     </View>
  );
}

const styles = StyleSheet.create({
  
  contain:{
    color:'red',
    fontSize:25,
    marginBottom:25,
    marginTop:-75,
    fontWeight:"bold",
    textDecorationLine: 'underline'
  },

  text:{
    fontSize:25,
    marginBottom:15,
    color:'white',
    marginTop:25,
    fontWeight:"bold"
  },

  last:{
    fontSize:25,
    color:'white',
    marginTop:25,
    fontWeight:"bold"
  },

  field:{
    fontWeight:"bold"
  },

  main:{
    backgroundColor: "black",
    marginTop:200
  },

  footer:{
    marginTop:150,
    color:'white',
    textAlign: "center",
    textDecorationLine: 'underline',
    fontWeight:"bold"
  }
})




