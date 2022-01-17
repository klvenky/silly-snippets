/**

Coupon types

* Take N% off each individual item in the cart 
* Take P% off the next item in the cart
* Take $D off your Nth item of type T

*/

/**

Pricing Examples

Cart #1
1. Coupon: Take 10% off your next item 
2. $10 postcard sorter 
3. $20 stationery organizer 

Total = $29

Cart #2 
1. $10 postcard sorter 
2. Coupon: Take 10% off your next item 
3. $20 stationery organizer 

Total = $28

Cart #3
1. $10 postcard sorter 
2. Coupon: Take $2 off your 2nd postcard sorter
3. Coupon: 25% off each individual item
4. Coupon: Take 10% off the next item in the cart
5. $10 postcard sorter

Total = ($10 * 75%) + (($10 - $2) * 75% * 90%) = $7.50 + $5.40 = $12.90


*/ interface ICartItem {
  id: string;
  name: string;
  actualPrice: number;
  discountedPrice?: number;
  type: 'item';
}
enum CouponType {
  percentage = 'percentage',
  discount = 'discount',
}

interface ICoupon {
  value: number; // value of discount
  type: CouponType; // type of the discount
  items: 'all' | 'next' | number; // apply on all items or apply on a specific item
  itemType?: string; // item type (item id)
  used?: boolean; // set only for next/nth item of type
}

class CartManager {
  constructor(private items: Array<ICartItem | ICoupon>) {}
  getDiscountPriceForItem(coupon: ICoupon, item: ICartItem) {
    let discountedPrice;
    if (coupon.type === CouponType.percentage) {
      // multiplier = 100 - coupon.value; // 25
      discountedPrice = (100 - coupon.value) * item.actualPrice;
    } else if (coupon.type === CouponType.discount) {
      discountedPrice = item.actualPrice - coupon.value;
    }
    return discountedPrice;
  }

  applyIfApplicable(coupon: ICoupon, item: ICartItem) {
    // isApplicable =
    if (coupon && isApplicable) {
      item.discountedPrice = this.getDiscountPriceForItem(coupon, item);
    }
  }

  calculatePrice() {
    const couponTypes = Object.values(CouponType);
    let couponsToApply: ICoupon[] = [];
    let cartValue = 0;
    const productTypeCountMap: { [key: string]: number } = {};
    for (const item of this.items) {
      if (item.type === 'item') {
        let discountedPrice = item.actualPrice;
        // cart item
        productTypeCountMap[item.id] = (productTypeCountMap[item.id] || 0) + 1; // {} => {123: 1} {123:1} => {123:2}
        if (couponsToApply.length) {
          // apply coupons
          couponsToApply.forEach((coupon) => {
            if (coupon.items === 'all') {
              discountedPrice = this.getDiscountPriceForItem(coupon, item);
            } else if (coupon.items === 'next') {
              // check if the coupon is matching the next condition
              discountedPrice = this.getDiscountPriceForItem(coupon, item);
              coupon.used = true;
            } else if (typeof coupon.items === 'number') {
              // apply for the nth item
              if (
                coupon.itemType === item.id &&
                coupon.items === productTypeCountMap[item.id]
              ) {
                discountedPrice = this.getDiscountPriceForItem(coupon, item);
                coupon.used = true;
              }
            }
          });
          couponsToApply = couponsToApply.filter((c) => c.items !== 'all' || !c.used);

          cartValue += discountedPrice;
          // remove any item specific coupons
          // if it applies to only 2nd item of type then remove it after applying the second type
          // else keep it
        } else {
          cartValue += item.actualPrice;
        }

        // apply all coupons in the couponsToApply
        // decide which coupon to remove based on the coupon type
      } else if (couponTypes.includes(item.type)) {
        // coupon
        couponsToApply.push(item);
      }
    }
    return cartValue;
  }

  calculate() {
    const cartitems = []; // all items
    const coupons = []; // all coupons
    // FOR every item -> check for the valid coupons which can be applied
    // if it's for nth item of a specific product -> if match -> apply
    // else if it's next item > apply & mark as used

    // if it's all coupon -> apply
  }
}

const c1 = CartManager([]);
