pragma solidity 0.6.12;

import "./common/IERC20.sol";
import "./library/SafeMath.sol";

/**
 * @title TokenVesting
 * @dev A token holder contract that can release its token balance gradually like a
 * typical vesting scheme, with a vesting period.
 */
contract TokenVesting {
    // The vesting schedule is time-based (i.e. using block timestamps as opposed to e.g. block numbers), and is
    // therefore sensitive to timestamp manipulation (which is something miners can do, to a certain degree). Therefore,
    // it is recommended to avoid using short time durations (less than a minute).
    // solhint-disable not-rely-on-time

    using SafeMath for uint256;

    event TokensReleased(address token, uint256 amount);

    // beneficiary of tokens after they are released
    address private immutable _beneficiary;

    // Durations and timestamps are expressed in UNIX time, the same units as block.timestamp.
    uint256 private immutable _start;
    uint256 private immutable _duration;
    // The amount of token can be released with the first release
    uint256 private immutable _initialRelease;

    mapping (address => uint256) private _released;

    /**
     * @dev Creates a vesting contract that vests its balance of any ERC20 token to the
     * beneficiary, gradually in a linear fashion until start + duration. By then all
     * of the balance will have vested.
     * @param beneficiary address of the beneficiary to whom vested tokens are transferred
     * @param initialRelease The amount of token can be released with the first release
     */
    constructor (address beneficiary, uint256 initialRelease) public {
        require(beneficiary != address(0), "TokenVesting: beneficiary is the zero address");

        _beneficiary = beneficiary;
        _duration = 182 days;
        _start = block.timestamp;
        _initialRelease = initialRelease;
    }

    // Copied and modified Openzepplin TokenVesting contract:
    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/drafts/TokenVesting.sol

    /**
     * @return the beneficiary of the tokens.
     */
    function beneficiary() public view returns (address) {
        return _beneficiary;
    }

    /**
     * @return the start time of the token vesting.
     */
    function start() public view returns (uint256) {
        return _start;
    }

    /**
     * @return the duration of the token vesting.
     */
    function duration() public view returns (uint256) {
        return _duration;
    }

    /**
     * @return the initial release of the tokens.
     */
    function initialRelease() public view returns (uint256) {
        return _initialRelease;
    }

    /**
     * @return the amount of the token released.
     */
    function released(address token) public view returns (uint256) {
        return _released[token];
    }

    /**
     * @notice Transfers vested tokens to beneficiary.
     * @param token ERC20 token which is being vested
     */
    function release(IERC20 token) public {
        require (msg.sender == _beneficiary, "The message sender is not beneficiary");
        
        uint256 unreleased = _releasableAmount(token);

        require(unreleased > 0, "TokenVesting: no tokens are due");

        _released[address(token)] = _released[address(token)].add(unreleased);

        token.transfer(_beneficiary, unreleased);

        emit TokensReleased(address(token), unreleased);
    }

    /**
     * @dev Calculates the amount that has already vested but hasn't been released yet.
     * @param token ERC20 token which is being vested
     */
    function _releasableAmount(IERC20 token) private view returns (uint256) {
        return (_initialRelease.add(_vestedAmount(token))).sub(_released[address(token)]);
    }

    /**
     * @dev Calculates the amount that has already vested.
     * @param token ERC20 token which is being vested
     */
    function _vestedAmount(IERC20 token) private view returns (uint256) {
        uint256 currentBalance = token.balanceOf(address(this));
        uint256 totalBalance = currentBalance.add(_released[address(token)]);
        totalBalance = totalBalance.sub(_initialRelease);

        if (block.timestamp >= _start.add(_duration)) {
            return totalBalance;
        } else {
            return totalBalance.mul(block.timestamp.sub(_start)).div(_duration);
        }
    }
}