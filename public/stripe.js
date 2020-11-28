var Book = document.querySelector("#Book");

var stripeHandler =StripeCheckout.configure({
  key: 'pk_test_51HjQNpIkN13VfTg6NbPc8aykDkCIuYw3TGJcVDNBC2w6URIeNyMAcSEMuefiBQQ1LcdBE4EzhSfbBklZ9tbW0L5700CHFLGDg8' ,
  locale:'en',
  token: function(token){

    
  }
})

Book.addEventListener('click',function(){
  stripeHandler.open({
    amount:price
  })
})