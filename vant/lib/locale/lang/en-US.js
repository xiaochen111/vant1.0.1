'use strict';

exports.__esModule = true;
exports.default = {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  contact: 'Name',
  loadingTip: 'Loading...',
  nameEmpty: 'Name can not be empty',
  telInvalid: 'Malformed phone number',
  telPlaceholder: 'Phone',
  vanContactCard: {
    addText: 'Add contact info'
  },
  vanContactList: {
    addText: 'Add new contact'
  },
  vanContactEdit: {
    confirmDelete: 'Are you sure you want to delete this contact?'
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next'
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Select coupon',
    reduce: 'Reduce',
    count: function count(_count) {
      return 'You have ' + _count + ' offers';
    }
  },
  vanCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  vanCouponItem: {
    unlimited: 'Unlimited',
    discount: function discount(_discount) {
      return _discount * 10 + '% off';
    },
    condition: function condition(_condition) {
      return 'At least ' + _condition;
    }
  },
  vanAddressEdit: {
    area: 'Area',
    receiver: 'Receiver',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    confirmDelete: 'Are you sure you want to delete this address?'
  },
  vanAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address'
  },
  vanAddressList: {
    address: 'Address',
    add: 'Add new address'
  },
  vanSku: {
    unavailable: 'The product is no longer available for purchase',
    spec: 'Please select the goods specification',
    least: 'Choose at least one',
    quota: function quota(_quota) {
      return 'Buy up to ' + _quota + ' items';
    },
    inventory: 'Inventory shortage',
    purchase: function purchase(count) {
      return 'You have purchased ' + count + ' items';
    }
  },
  vanSkuActions: {
    cart: 'Add to cart',
    buy: 'Buy'
  },
  vanSkuMessages: {
    fill: 'Please fill',
    upload: 'Please upload',
    number: 'Please fill in the correct number format message',
    email: 'Please fill in the correct email message',
    id_no: 'Please fill in the correct ID number message',
    onePic: 'only one picture',
    placeholder: {
      id_no: 'Idcard Number',
      text: 'Text',
      tel: 'Number',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      textarea: 'Text'
    }
  },
  vanSkuImgUploader: {
    or: 'Or',
    uploading: 'Uploading...',
    rephoto: 'Take Again',
    photo: 'Take',
    reselect: 'Reselect',
    select: 'Select Photo',
    maxSize: function maxSize(_maxSize) {
      return 'The upload limit is up to ' + _maxSize + 'MB\uFF0Cplease try to compress the photo';
    }
  },
  vanSkuStepper: {
    title: 'Quantity',
    remain: function remain(count) {
      return 'Remain ' + count + ' items';
    },
    quota: function quota(_quota2) {
      return 'Buy up to ' + _quota2 + ' items';
    }
  }
};