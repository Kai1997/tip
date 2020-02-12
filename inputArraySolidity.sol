pragma solidity >=0.4.22 <0.7.0;

//["0xef55BfAc4228981E850936AAf042951F7b146e41","0xef55BfAc4228981E850936AAf042951F7b146e41","0xef55BfAc4228981E850936AAf042951F7b146e41","0xef55BfAc4228981E850936AAf042951F7b146e41","0xef55BfAc4228981E850936AAf042951F7b146e41","0xef55BfAc4228981E850936AAf042951F7b146e41"]
contract Storage {

    address[] public a;
    /**
     * @dev Store value in variable
     * @param b value to store
     */
    function store(address[6] b) public {
       a = b;
    }
    
    function store0(address b) public {
      a[0] = b;
    }
    
    function store2(address b) public {
      a[2] = b;
    }
    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retreive() public view returns (address[]){
        return a;
    }
}
