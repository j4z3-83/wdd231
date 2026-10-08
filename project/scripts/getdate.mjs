export function GetDate() {

    
        const full = document.querySelector("#lastModified");
        const currentYear = document.querySelector("#currentYear");
        const today = new Date();

        currentYear.innerHTML = `&copy; ${today.getFullYear()}`;

        lastModified.innerHTML = `Last Modified:  
    ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}`;
    

}




