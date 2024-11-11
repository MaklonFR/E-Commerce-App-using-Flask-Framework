// document load how flash messages with timer
    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fetchTransactions, 1000);

    const flashMessages = document.querySelectorAll('.alert');
      flashMessages.forEach(msg => {
        Swal.fire({
          icon: msg.classList.contains('alert-error') ? 'error' : 'success',
          title: msg.innerText,
          showConfirmButton: false,
          timer: 2000 // Show for 2 seconds
        });
      });

        const d = new Date();
        let text = d.toLocaleString();
        document.getElementById("date-info").innerHTML = text;

        x = document.getElementById('form-transaction');
         if (x.style.display === "none") {
          x.style.display = "block";
           } else {
            x.style.display = "none";
        }
    });

//delete product
    function confirmDelete(product_id) {
       Swal.fire({
          title: 'Are you sure to delete?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2e8e87',
          cancelButtonColor: '#C42A02',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById('delete-form-' + product_id).submit();
          }
        });
    }

//delete category
    function confirmDeleteCat(catId) {
       Swal.fire({
          title: 'Are you sure to delete?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2e8e87',
          cancelButtonColor: '#C42A02',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById('delete-form-category-' + catId).submit();
          }
        });
    }