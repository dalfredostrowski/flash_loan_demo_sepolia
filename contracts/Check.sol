
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Check {
	function check(address _token, address user) view public returns(uint256){
		return IERC20(_token).balanceOf(user);
	}
}


