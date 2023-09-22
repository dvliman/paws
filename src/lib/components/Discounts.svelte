<script>
  import Tiny from '$lib/assets/about/tiny.jpeg';
  import Taco from '$lib/assets/about/taco.jpeg';
  import Nino from '$lib/assets/about/nino.jpeg';

  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
  }

  function beginningCurrentMonth() {
    var today = new Date();
    return getFormattedDate(new Date(today.getFullYear(), today.getMonth(), 1));
  }	

  function nextYearEndOfMonth() {
    var today = new Date();
    return getFormattedDate(new Date(today.getFullYear() + 1, today.getMonth()+1, 0));
  }

  function validCoupon() {
    return `Valid from ${beginningCurrentMonth()} - ${nextYearEndOfMonth()}`;
  }

  function makeCoupon(title, validity, image, description) {
    return `
      <table style="margin: 0 auto; width: 100%; border: dashed; page-break-inside: avoid;">
        <tbody>
          <tr style="background-color: #CCC">
            <td align="center" style="padding-top: 15px">
              <h1>${title}</h1>
            </td>
          </tr>
          <tr> 
            <td align="center" style="padding-bottom: 15px">
              <h3>${validity}</h3>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 15px">
              <img src=${image} alt=${title} style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover">
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 15px">
              <p>${description}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 15px">
              <h2>Tiny Little Paws Dog Grooming</h2>
            </td>
          </tr>
        </tbody>
      </table>
      `;
  }

  function print(printWindow, content) {
    function onDocumentReady(document, cb) {
       if (document.readyState !== "loading") {
           cb(); // already loaded
       } else {
           document.addEventListener("DOMContentLoaded", () => cb());
       }
    }

    onDocumentReady(printWindow.document, () => {
        if (content != null) {
            printWindow.document.write(content);
        }
        setTimeout(() => {
            printWindow.print();
        }, 200);
    });
  };
</script>

<section>
  <h1>Discounts & Coupons</h1>
  <p>Check out the different discounts we offer below!</p>

  <div class="discount">
    <h2>New Customer Discount - $20 off!</h2>
    <img src={Tiny} alt="New Customer Discount - $20 off"/>
    <span>{validCoupon()}</span>
    <button on:click={() => print(
      window, 
      makeCoupon(
        "New Customer Discount - $20 off", 
        validCoupon(), 
         Tiny,
        "New Customers will receive $20 off their Bath + Haircut grooming package on their first appointment if you mention this discount on your first appointment!"
      )
    )}>Print</button>
    <button>Share</button>
  </div>

  <div class="discount">
    <h2>Refer a Friend or Neighbor</h2>
    <img src={Taco} alt="Refer a Friend or Neighbor"/>
    <span>{validCoupon()}</span>
    <button on:click={() => print(
      window, 
      makeCoupon(
        "Refer a Friend or Neighbor", 
        validCoupon(), 
         Taco,
        "Referrals are appreciated! Tell your friends and neighbors who live in our service area about us! For every new qualified customer that tells us your name on their first succesful bath or groom appointment, you will receive $10 off on your next service."
      )
    )}>Print</button>
    <button>Share</button>
  </div>

  <div class="discount">
    <h2>Multiple Pet Discount</h2>
    <img src={Nino} alt="Multiple Pet Discount"/>
    <span>{validCoupon()}</span>
    <button on:click={() => print(
      window, 
      makeCoupon(
        "Multiple Pet Discount", 
        validCoupon(), 
         Nino,
        "Multiple Pet Discount for 3 or more pets, $10 off each pet."
      )
    )}>Print</button>
    <button>Share</button>
  </div>
</section>

<style>
  h1, p {
    width: 100%;
    text-align: center;
  }
  section {
    & div {
      flex: 1;
    }
  }
  .discount {
    padding: 1rem;
    border-radius: 1rem;
    border: 2px dashed #AAA;
    & img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
</style>