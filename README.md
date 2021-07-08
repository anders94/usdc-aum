usdc-aum
========

Estimates the USDC Assets Under Management by showing the total amount
of USDC minted on each of the live chains. To get an accurate count,
one would need to subtract the reserve accounts which hold USDC that isn't
yet backed by AUM.

## Setup
```
git clone https://github.com/anders94/usdc-aum.git
cd usdc-aum/
npm install
```

## Run
```
node app
```

## Example Output as of 2021-07-03
```
USDC Supply
-----------------------------------------
      Ethereum USDC:    24,681,900,738.20
      Algorand USDC:       176,105,114.26
       Stellar USDC:        11,249,152.85
        Solana USDC:       785,000,020.00
          Tron USDC:       111,719,980.49
-----------------------------------------
  Total USDC supply:    25,765,975,005.80
```
