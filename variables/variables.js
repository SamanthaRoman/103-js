

var signInEmail = "samantharoman@gmail.com";
var signInPassword = "password123";
var accountProfiles = "Family Account";
var profilePhotos = "Profile Photos"
var profileName = "Dad/Mom";
var recent = "Continue Watching for Dad/Mom";
var reccomendationsByLiked = "Because you liked S.W.A.T.";
var trendingNow = "Trending Now Section";
var recomendationsByWatched = "Because you watched Suits";
var unwatchedEpisodes = "Catch Up on Unwatched Episodes";
var browse = "Browse Section";
var familiarFavorites = "Familiar TV Favorites";
var changePassword = "New Password Changes";
var paymentCC = "Vis CC";
var paymentCardNumber = 1234-456-667;
var experationDate = "August 23rd";
var billingZipCode = 22342;
var manageProfile = "Adding additional profiles";
var kidsAccount = "Trent's Profile Name"
var kidsProfile = "Trent's Profile Photo"


document.write(
    `
    <h2> 20 Variables for Netflix </h2>
    <p class="details" >1. Sign In Email: ${signInEmail}</p>
    <p class="details" >2. Sign In Password: ${signInPassword}</p>
    <p class="details" >3. Profiles: ${accountProfiles}</p>
    <p class="details" >4. Profile Photos: ${profilePhotos}</p>
    <p class="details" >5. Profile Name: ${profileName}</p>
    <p class="details" >6. Most Recent Section: ${recent}</p>
    <p class="details" >7. Because You Liked Section: ${reccomendationsByLiked}</p>
    <p class="details" >8. Trending Section: ${trendingNow}</p>
    <p class="details" >9. Because You Watched Section: ${recomendationsByWatched}</p>
    <p class="details" >10. Unwatched Episode Section: ${unwatchedEpisodes}</p>
    <p class="details" >11. Browse Recomendations: ${browse}</p>
    <p class="details" >12. Familiar Recomendations: ${familiarFavorites}</p>
    <p class="details" >13. Update/Change Password: ${changePassword}</p>
    <p class="details" >14. Payment Type: ${paymentCC}</p>
    <p class="details" >15. Card Number: ${paymentCardNumber}</p>
    <p class="details" >16. Card Expiration Date: ${experationDate}</p>
    <p class="details" >17. Billing Zip Code: ${billingZipCode}</p>
    <p class="details" >18. Managing Profile: ${manageProfile}</p>
    <p class="details" >19. Additional Account For Son: ${kidsAccount}</p>
    <p class="details" >20. Additional Account Profile: ${kidsProfile}</p>
    
    `
);