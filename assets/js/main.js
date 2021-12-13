/* Theme Control */
function ThemeControl(){
    
    if(localStorage.getItem("theme") == "dark"){
        body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
            for(let i = 0 ; i < mainbuttonhover.length ; i++){
                mainbuttonhover[i].innerHTML = `
                <svg class="normalsvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z" fill="black"/>
                </svg>
                <svg class="hoversvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_371_50" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z"/>
                    </mask>
                    <path d="M89 0H90V-1H89V0ZM8 0V-1H7V0H8ZM89 4.33333H88V5.33333H89V4.33333ZM93 4.33333H94V3.33333H93V4.33333ZM93 8.66667H92V9.66667H93V8.66667ZM98 8.66667H99V7.66667H98V8.66667ZM98 30.3333V31.3333H99V30.3333H98ZM93 30.3333V29.3333H92V30.3333H93ZM93 34.6667V35.6667H94V34.6667H93ZM89 34.6667V33.6667H88V34.6667H89ZM89 39V40H90V39H89ZM8 39H7V40H8V39ZM8 34.6667H9V33.6667H8V34.6667ZM4 34.6667H3V35.6667H4V34.6667ZM4 30.3333H5V29.3333H4V30.3333ZM0 30.3333H-1V31.3333H0V30.3333ZM0 8.66667V7.66667H-1V8.66667H0ZM4 8.66667V9.66667H5V8.66667H4ZM4 4.33333V3.33333H3V4.33333H4ZM8 4.33333V5.33333H9V4.33333H8ZM89 -1H8V1H89V-1ZM90 4.33333V0H88V4.33333H90ZM93 3.33333H89V5.33333H93V3.33333ZM94 8.66667V4.33333H92V8.66667H94ZM98 7.66667H93V9.66667H98V7.66667ZM99 13V8.66667H97V13H99ZM99 17.3333V13H97V17.3333H99ZM99 21.6667V17.3333H97V21.6667H99ZM99 26V21.6667H97V26H99ZM99 30.3333V26H97V30.3333H99ZM93 31.3333H98V29.3333H93V31.3333ZM94 34.6667V30.3333H92V34.6667H94ZM89 35.6667H93V33.6667H89V35.6667ZM88 34.6667V39H90V34.6667H88ZM89 38H8V40H89V38ZM9 39V34.6667H7V39H9ZM4 35.6667H8V33.6667H4V35.6667ZM3 30.3333V34.6667H5V30.3333H3ZM0 31.3333H4V29.3333H0V31.3333ZM-1 26V30.3333H1V26H-1ZM-1 21.6667V26H1V21.6667H-1ZM-1 17.3333V21.6667H1V17.3333H-1ZM-1 13V17.3333H1V13H-1ZM-1 8.66667V13H1V8.66667H-1ZM4 7.66667H0V9.66667H4V7.66667ZM3 4.33333V8.66667H5V4.33333H3ZM8 3.33333H4V5.33333H8V3.33333ZM7 0V4.33333H9V0H7Z" fill="white" mask="url(#path-1-inside-1_371_50)"/>
                    </svg>
                        
            <p>Click</p>
                `
            }
    }
    else if(localStorage.getItem("theme") == "light"){
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            for(let i = 0 ; i < mainbuttonhover.length ; i++){
                mainbuttonhover[i].innerHTML = `
                <svg class="normalsvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z" fill="black"/>
                </svg>
                <svg class="hoversvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_371_132" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z"/>
                </mask>
                <path d="M89 0H90V-1H89V0ZM8 0V-1H7V0H8ZM89 4.33333H88V5.33333H89V4.33333ZM93 4.33333H94V3.33333H93V4.33333ZM93 8.66667H92V9.66667H93V8.66667ZM98 8.66667H99V7.66667H98V8.66667ZM98 30.3333V31.3333H99V30.3333H98ZM93 30.3333V29.3333H92V30.3333H93ZM93 34.6667V35.6667H94V34.6667H93ZM89 34.6667V33.6667H88V34.6667H89ZM89 39V40H90V39H89ZM8 39H7V40H8V39ZM8 34.6667H9V33.6667H8V34.6667ZM4 34.6667H3V35.6667H4V34.6667ZM4 30.3333H5V29.3333H4V30.3333ZM0 30.3333H-1V31.3333H0V30.3333ZM0 8.66667V7.66667H-1V8.66667H0ZM4 8.66667V9.66667H5V8.66667H4ZM4 4.33333V3.33333H3V4.33333H4ZM8 4.33333V5.33333H9V4.33333H8ZM89 -1H8V1H89V-1ZM90 4.33333V0H88V4.33333H90ZM93 3.33333H89V5.33333H93V3.33333ZM94 8.66667V4.33333H92V8.66667H94ZM98 7.66667H93V9.66667H98V7.66667ZM99 13V8.66667H97V13H99ZM99 17.3333V13H97V17.3333H99ZM99 21.6667V17.3333H97V21.6667H99ZM99 26V21.6667H97V26H99ZM99 30.3333V26H97V30.3333H99ZM93 31.3333H98V29.3333H93V31.3333ZM94 34.6667V30.3333H92V34.6667H94ZM89 35.6667H93V33.6667H89V35.6667ZM88 34.6667V39H90V34.6667H88ZM89 38H8V40H89V38ZM9 39V34.6667H7V39H9ZM4 35.6667H8V33.6667H4V35.6667ZM3 30.3333V34.6667H5V30.3333H3ZM0 31.3333H4V29.3333H0V31.3333ZM-1 26V30.3333H1V26H-1ZM-1 21.6667V26H1V21.6667H-1ZM-1 17.3333V21.6667H1V17.3333H-1ZM-1 13V17.3333H1V13H-1ZM-1 8.66667V13H1V8.66667H-1ZM4 7.66667H0V9.66667H4V7.66667ZM3 4.33333V8.66667H5V4.33333H3ZM8 3.33333H4V5.33333H8V3.33333ZM7 0V4.33333H9V0H7Z" fill="black" mask="url(#path-1-inside-1_371_132)"/>
                </svg>
                
                        
                <p>Click</p>
                `
            }
    }
}
/* Mobile Nav */
const hamburgermenuiconmobile = document.querySelector('.hamburgermenuiconmobile');
const mobilenavmenu = document.querySelector('.mobilenavmenu');
const mobileopenmenu = document.querySelector('.mobileopenmenu');
const mobileopenmenuli = document.querySelectorAll('.mobileopenmenu .navlist ul li');
hamburgermenuiconmobile.addEventListener('click' , (e) => {
    hamburgermenuiconmobile.classList.toggle('active');
    mobilenavmenu.classList.toggle('active');
    mobileopenmenu.classList.toggle('active');
})
for(let i = 0 ; i < mobileopenmenuli.length; i++){
    mobileopenmenuli[i].addEventListener('click' , () => {
        hamburgermenuiconmobile.classList.toggle('active');
        mobilenavmenu.classList.toggle('active');
        mobileopenmenu.classList.toggle('active');
    })
}


/* Dekstop Nav */
const hamburgermenuicon = document.querySelector('.hamburgermenuicon');
const openmenu = document.querySelector('.openmenu');
const openmenuli = document.querySelectorAll('.openmenu li');
const pageright = document.querySelector('#pageright');
hamburgermenuicon.addEventListener('click' , (e) => {
    hamburgermenuicon.classList.toggle('active');
    openmenu.classList.toggle('active');
    pageright.classList.toggle('active');
})
for(let i = 0 ; i < openmenuli.length; i++){
    openmenuli[i].addEventListener('click' , () => {
        hamburgermenuicon.classList.toggle('active');
        openmenu.classList.toggle('active');
        pageright.classList.toggle('active');
    })
}


/* template theme */
const theme = document.querySelectorAll('.theme');
const body = document.querySelector('#body');
const bannerbgimg = document.querySelector('#banner .bg-image img')
const mainbuttonhover = document.querySelectorAll('.mainbuttonhover');
for(let i = 0 ; i < theme.length ; i++){
    theme[i].addEventListener('click' , (e) => {
        if(e.target.classList.contains("lighttarget")){
            localStorage.setItem("theme" , "light");
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            for(let i = 0 ; i < mainbuttonhover.length ; i++){
                mainbuttonhover[i].innerHTML = `
                <svg class="normalsvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z" fill="black"/>
                </svg>
                <svg class="hoversvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_371_132" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z"/>
                </mask>
                <path d="M89 0H90V-1H89V0ZM8 0V-1H7V0H8ZM89 4.33333H88V5.33333H89V4.33333ZM93 4.33333H94V3.33333H93V4.33333ZM93 8.66667H92V9.66667H93V8.66667ZM98 8.66667H99V7.66667H98V8.66667ZM98 30.3333V31.3333H99V30.3333H98ZM93 30.3333V29.3333H92V30.3333H93ZM93 34.6667V35.6667H94V34.6667H93ZM89 34.6667V33.6667H88V34.6667H89ZM89 39V40H90V39H89ZM8 39H7V40H8V39ZM8 34.6667H9V33.6667H8V34.6667ZM4 34.6667H3V35.6667H4V34.6667ZM4 30.3333H5V29.3333H4V30.3333ZM0 30.3333H-1V31.3333H0V30.3333ZM0 8.66667V7.66667H-1V8.66667H0ZM4 8.66667V9.66667H5V8.66667H4ZM4 4.33333V3.33333H3V4.33333H4ZM8 4.33333V5.33333H9V4.33333H8ZM89 -1H8V1H89V-1ZM90 4.33333V0H88V4.33333H90ZM93 3.33333H89V5.33333H93V3.33333ZM94 8.66667V4.33333H92V8.66667H94ZM98 7.66667H93V9.66667H98V7.66667ZM99 13V8.66667H97V13H99ZM99 17.3333V13H97V17.3333H99ZM99 21.6667V17.3333H97V21.6667H99ZM99 26V21.6667H97V26H99ZM99 30.3333V26H97V30.3333H99ZM93 31.3333H98V29.3333H93V31.3333ZM94 34.6667V30.3333H92V34.6667H94ZM89 35.6667H93V33.6667H89V35.6667ZM88 34.6667V39H90V34.6667H88ZM89 38H8V40H89V38ZM9 39V34.6667H7V39H9ZM4 35.6667H8V33.6667H4V35.6667ZM3 30.3333V34.6667H5V30.3333H3ZM0 31.3333H4V29.3333H0V31.3333ZM-1 26V30.3333H1V26H-1ZM-1 21.6667V26H1V21.6667H-1ZM-1 17.3333V21.6667H1V17.3333H-1ZM-1 13V17.3333H1V13H-1ZM-1 8.66667V13H1V8.66667H-1ZM4 7.66667H0V9.66667H4V7.66667ZM3 4.33333V8.66667H5V4.33333H3ZM8 3.33333H4V5.33333H8V3.33333ZM7 0V4.33333H9V0H7Z" fill="black" mask="url(#path-1-inside-1_371_132)"/>
                </svg>
                
                        
                <p>Click</p>
                `
            }
        }    
        if(e.target.classList.contains("darktarget")){
            localStorage.setItem("theme" , "dark");

            body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
            for(let i = 0 ; i < mainbuttonhover.length ; i++){
                mainbuttonhover[i].innerHTML = `
                <svg class="normalsvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z" fill="black"/>
                </svg>
                <svg class="hoversvg" width="98" height="39" viewBox="0 0 98 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_371_50" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H89V4.33333H93V8.66667H98V13V17.3333V21.6667V26V30.3333H93V34.6667H89V39H8V34.6667H4V30.3333H0V26V21.6667V17.3333V13V8.66667H4V4.33333H8V0Z"/>
                    </mask>
                    <path d="M89 0H90V-1H89V0ZM8 0V-1H7V0H8ZM89 4.33333H88V5.33333H89V4.33333ZM93 4.33333H94V3.33333H93V4.33333ZM93 8.66667H92V9.66667H93V8.66667ZM98 8.66667H99V7.66667H98V8.66667ZM98 30.3333V31.3333H99V30.3333H98ZM93 30.3333V29.3333H92V30.3333H93ZM93 34.6667V35.6667H94V34.6667H93ZM89 34.6667V33.6667H88V34.6667H89ZM89 39V40H90V39H89ZM8 39H7V40H8V39ZM8 34.6667H9V33.6667H8V34.6667ZM4 34.6667H3V35.6667H4V34.6667ZM4 30.3333H5V29.3333H4V30.3333ZM0 30.3333H-1V31.3333H0V30.3333ZM0 8.66667V7.66667H-1V8.66667H0ZM4 8.66667V9.66667H5V8.66667H4ZM4 4.33333V3.33333H3V4.33333H4ZM8 4.33333V5.33333H9V4.33333H8ZM89 -1H8V1H89V-1ZM90 4.33333V0H88V4.33333H90ZM93 3.33333H89V5.33333H93V3.33333ZM94 8.66667V4.33333H92V8.66667H94ZM98 7.66667H93V9.66667H98V7.66667ZM99 13V8.66667H97V13H99ZM99 17.3333V13H97V17.3333H99ZM99 21.6667V17.3333H97V21.6667H99ZM99 26V21.6667H97V26H99ZM99 30.3333V26H97V30.3333H99ZM93 31.3333H98V29.3333H93V31.3333ZM94 34.6667V30.3333H92V34.6667H94ZM89 35.6667H93V33.6667H89V35.6667ZM88 34.6667V39H90V34.6667H88ZM89 38H8V40H89V38ZM9 39V34.6667H7V39H9ZM4 35.6667H8V33.6667H4V35.6667ZM3 30.3333V34.6667H5V30.3333H3ZM0 31.3333H4V29.3333H0V31.3333ZM-1 26V30.3333H1V26H-1ZM-1 21.6667V26H1V21.6667H-1ZM-1 17.3333V21.6667H1V17.3333H-1ZM-1 13V17.3333H1V13H-1ZM-1 8.66667V13H1V8.66667H-1ZM4 7.66667H0V9.66667H4V7.66667ZM3 4.33333V8.66667H5V4.33333H3ZM8 3.33333H4V5.33333H8V3.33333ZM7 0V4.33333H9V0H7Z" fill="white" mask="url(#path-1-inside-1_371_50)"/>
                    </svg>
                        
            <p>Click</p>
                `
            }
        }
    })
}
ThemeControl();






