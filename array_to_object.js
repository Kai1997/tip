
    var photo =["https://gateway.ipfs.io/ipfs/QmYCjxC6NSGMmWHBkqg16VmGu3fEecpJFFX7ksD8uporTj", "https://gateway.ipfs.io/ipfs/QmNTwRAiGAfQYWKadtGY82DC435TTdwJnMvVMKqfqfsj3b", "https://gateway.ipfs.io/ipfs/QmXgq1tk2c7MW7Dvv5hbAYZe683mgHSdG7vH9Wr6u6UcWo"] 

    // Arrow Function  
    let c =[]
 let photos =  photo.map((value, key) => { 
     let b ={
       src: value,
       height:0.1,
       width:0.1,
       key:key
      }
     return (
        b
     )
    }
  ); 
  console.log(photos)
  //result
[
{
src:"https://gateway.ipfs.io/ipfs/QmYCjxC6NSGMmWHBkqg16VmGu3fEecpJFFX7ksD8uporTj",
height:0.1,
width:0.1,
key:0
},
{
src:"https://gateway.ipfs.io/ipfs/QmNTwRAiGAfQYWKadtGY82DC435TTdwJnMvVMKqfqfsj3b",
height:0.1,
width:0.1,
key:1
},
{
src:"https://gateway.ipfs.io/ipfs/QmXgq1tk2c7MW7Dvv5hbAYZe683mgHSdG7vH9Wr6u6UcWo",
height:0.1,
width:0.1,
key:2
}
]
