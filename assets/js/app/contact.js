import { validations } from "./formValidation.js";
validations();
export function displayContact()
{
    let term = `
    <h2 class="text-center">Contact US</h2>
    <form>
        <div class="row mt-3">
            <div class="col-md-6">
                <input type="text" required id="name" maxlength="37" class="form-control mt-4" placeholder="Enter Your Name">
                <span Class="error" class="animate__animated"></span>
            </div>
            <div class="col-md-6">
                <input type="email" required id="email"  class="form-control mt-4" placeholder="Enter Your Email">
                <span Class="error" class="animate__animated"></span>
            </div>
            <div class="col-md-6">
                <input type="number"required id="phone" class="form-control mt-4" placeholder="Enter Your Phone">
                <span Class="error" class="animate__animated"></span>
            </div>
            <div class="col-md-6">
                <input type="number"required id="age"  class="form-control mt-4" placeholder="Enter Your Age">
                <span Class="error" class="animate__animated"></span>
            </div>
            <div class="col-md-6 position-relative">
                <input type="password" required id="password" class="form-control mt-4" placeholder="Enter Your Password">
                <span Class="error" class="animate__animated"></span>
                <span class="showPass"><i data-show="show" class="fa-solid fa-eye-slash"></i></span>
            </div>
            <div class="col-md-6">
                <input type="password"required id="repassword" class="form-control mt-4" placeholder="ReEnter Password">
                <span Class="error" class="animate__animated"></span>
            </div>
            <div class="col-md-12  mt-4">
                <button type="submit" class="form-btn rounded-2 mb-3 animate__animated">Submit</button>
            </div>
        </form>
    </div>
    `
    $('#hero .box').html(null);
    $('#searchBox .row').html(null);
    $('#contact').html(term);
    validations();
}