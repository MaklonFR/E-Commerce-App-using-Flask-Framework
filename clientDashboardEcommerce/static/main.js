function showProduct(id) {
    const url = 'http://192.168.100.239:3000/api/des_product/'+id;
    alert(id)
    fetch(url)
        .then(response => response.json())
        .then(data => displayCategories(data))
        .catch(error => console.error('Error fetching categories:', error));
}

function displayCategories(categories) {
    const resultsContainer = document.getElementById("desscript");
    resultsContainer.innerHTML = "";  // Clear previous results

    if (categories.length > 0) {
        categories.forEach(category => {
           resultsContainer.innerHTML = '
           <div class="product-box row">
                                  <div class="product-img col-lg-6">
                                    <img width="400" height="400" class="class="img-fluid src="" alt=""/></div>
                                  <div class="product-details col-lg-6 text-start">
                                    <h4></h4>
                                    <div class="product-price">
                                    </div>
                                    <div class="product-view">
                                      <h6 class="f-w-700">Deskripsi Produk</h6>
                                      <p class="mb-0">  </p>
                                    </div>
                                    <div class="product-size">
                                      <ul>
                                        <li>
                                          <button class="btn btn-outline-light" type="button">M</button>
                                        </li>
                                        <li>
                                          <button class="btn btn-outline-light" type="button">L</button>
                                        </li>
                                        <li>
                                          <button class="btn btn-outline-light" type="button">Xl</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="product-qnty">
                                      <h6 class="f-w-700">Quantity</h6>
                                      <fieldset>
                                        <div class="input-group">
                                          <input class="touchspin text-center" type="text" value="5"/>
                                        </div>
                                      </fieldset>
                                      <div class="addcart-btn"><a class="btn btn-primary" href="#">Add to Cart</a>
                                    </div>
                                  </div>
                                </div>
                                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>';
        });
    } else {
        resultsContainer.innerHTML = "<li>No categories found.</li>";
    }
}