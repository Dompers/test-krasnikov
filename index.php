<?php
    include_once "inc/header.php";
?>
    <main>
        <h1 class="title">Reach Out and <span>Connect</span> With Us</h1>
        <p class="desc">Bridging Your Ideas with Our Expertise</p>
        <form method="POST" action="form.php" class="form">
            <label for="name" class="form-label">
                <input type="text" id="name" class="form-control" placeholder="Name *" name="name">
                <span class="form-error"></span>
            </label>
            <label for="email" class="form-label">
                <input type="text" id="email"  placeholder="E-mail *" name="email">
                <span class="form-error"></span>
            </label>
            <label for="phone" class="form-label">
                <input type="text" id="phone"  placeholder="Phone *" name="phone" >
                <span class="form-error"></span>
            </label>
            <label for="pass" class="form-label">
                <span class="form-input-wrapper">
                    <input type="password" id="pass"  placeholder="Password *" name="pass">
                    <span class="form-show-pass"></span>
                </span>
                <span class="form-error"></span>
            </label>
            <label for="city" id="city-label" class="form-label">
                <span class="form-input-wrapper">
                    <select name="city" id="city" >
                        <option disabled selected value="">Choise your city *</option>
                        <option value="new-jersey">New Jersey</option>
                        <option value="new-jersey">Mew Jersey</option>
                        <option value="new-jersey">Sun Jersey</option>
                    </select>
                </span>
                <span class="form-error"></span>
            </label>
            <label for="agree" class="form-label check check-checkbox">
                <input type="checkbox" id="agree" name="agree">
                <span class="check-label">I have read and accepted <a href="#">privacy policy</a></span>
                <span class="form-error"></span>
            </label>
            <div class="form-submit-wrapper">
                <button type="submit">Submit</button>
            </div>
        </form>
    </main>
<?php
    include_once "inc/footer.php";
?>
