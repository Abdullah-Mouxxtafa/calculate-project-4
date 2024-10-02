function calculateAge() {
    const birthDate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const differenceInTime = today.getTime() - birthDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    const years = Math.floor(differenceInDays / 365.25);
    const remainingDays = differenceInDays % 365.25;
    const months = Math.floor(remainingDays / 30.44);
    const days = Math.floor(remainingDays % 30.44);
    
    document.getElementById("result").textContent = `Your age is: ${years} Year(s), ${months} Month(s), ${days} Day(s).`;
}
