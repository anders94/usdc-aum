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

## Example Output as of 2021-06-15
```
USDC Supply
-----------------------------------------
      Ethereum USDC:    23,117,655,733.66
      Algorand USDC:       151,537,434.92
       Stellar USDC:         8,939,792.70
        Solana USDC:       785,000,020.00
-----------------------------------------
USDC in circulation:    24,063,132,981.28
```
