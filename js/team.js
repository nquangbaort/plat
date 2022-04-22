// render team
const TEAM_LIST = [{
        name: 'Nguyen Viet Hung',
        role: 'CEO, Co-founder',
        skills: [
            'Graduated from Hanoi University of Science and Technology',
            'Founder of VAIX Vietnam which is being invested by Nakashima Corporation Japan.',
            'Founder ＆ CEO of SKC Vietnam Group',
            '10 years of experience in designing hardware and software for industrial robots and Diamond Dicing Saw in Japan. ',
            '8 years of experience in management',
            'Founder ＆ CEO of SKC Vietnam Group',
        ],
        photo: 'images/teams/team1.png',
        order: 3,
        social: [{
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/nguyen-plats/'
        }]
    },
    {
        name: 'Le Thanh Nghi',
        role: 'Technical Advisor',
        skills: [
            'Graduated from Hanoi University of Science and Technology',
            'CTO of Vaix Vietnam',
            'Vice-President of Vaix Japan',
            '15 years of experiences in Web & Mobile application development',
            '10 years of experience in management',
            'F5 years of experience in investment',
        ],
        photo: 'images/teams/team1.png',
        order: 2,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/nghilt'
        }]
    },
    {
        name: 'Le Quang Lien',
        role: 'CTO',
        skills: [
            'Graduated from Hanoi University of Science and Technology',
            '10 years of experience in the information technology industry with many different positions from developer to manager',
            '2 years of experience in programming on blockchain',
            'Mentor of Octopus Technical Training Course in Vietnam',
        ],
        photo: 'images/teams/team1.png',
        order: 3,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/thomas-le-3b3498146/'
        }]
    },
    {
        name: 'Ho Dinh Dung',
        role: 'Smart Contract Team Leader',
        skills: [
            'Graduated from Electronics and Telecommunications Engineer in Hue University of Sciences (HUSC)',
            'Studied and worked on AI/ ML at NARA Institute of Science and Technology (NAIST) in Japan.',
            '3 years of experience in software development',
            '2 years of experience as blockchain developer',
            'Mentor of Octopus Technical Training Course in Vietnam',
            'Currently being enthusiastic about Blockchain technology.',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/dinh-dung-880bb0219'
        }]
    },
    {
        name: 'Nguyen Trung Tin',
        role: 'Blockchain Team Leader',
        skills: [
            '3rd year Student at HCM University of Science (HCMUS)',
            '3 years of experience in game programming and Devops for a GTA San Andreas Online server ',
            '3 years of experience in Web 2.0 programming',
            '1 year of experience in blockchain research',
            'Top 4 in K3 Hackathon organized by Vietnam Blockchain Innovation (VBI).',
            'Currently working on React Native platform for mobile apps, connecting app to the Octopus blockchain via Polkadotjs.',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/trungtin2001/'
        }]
    },
    {
        name: 'Mai Xuan Trieu',
        role: 'Blockchain Research Leader',
        skills: [
            'Graduated from HCM University of Technology & Education',
            'Currently working at FPT Japan Corporation',
            '5 years of experience in web and mobile programming',
            '2 years of research and development of blockchain products',
            ' Leader of a crypto research team with12 members',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/trieu-mai-b35481133/'
        }]
    },
    {
        name: 'Truong Thai Son',
        role: 'Project Manager',
        skills: [
            'Graduated from Hanoi FPT Aptech',
            'COO of Vaix Viet Nam',
            '12 years of experience in software development',
            '7 years of experience in project management ',
            '4 years of experience in system architect',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/truong-thai-son'
        }]
    },
    {
        name: 'Cung Bao Yen',
        role: 'Smart Contract Developer',
        skills: [
            '5th year student at Hanoi University of Science and Technology',
            '2 years of experience in software development',
            'Have experience in coding smart contract',
            'Have deep interest in cryptocurrency',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/cungbaoyen'
        }]
    },
    {
        name: 'Le Thi Hai Yen',
        role: 'Mobile Developer',
        skills: [
            'Graduated from Hanoi University of Science and Technology ',
            '3 years of experience in software development',
            'H1 year of experience in UI/UX design',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/Yenle-Vaix'
        }]
    },
    {
        name: 'Nguyen Duy Khuong',
        role: 'Mobile Developer',
        skills: [
            'Graduated from Da Lat University with Bachelor Degree in Information Technology',
            'Graduated from Senmon Tokyo Design Technology Center in Japan',
            '5 years of experience as a full stack developer',
            'Head of Communicator Team at Vaix Viet Nam'
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/Khuongnguyen-Vaix'
        }]
    },
    {
        name: 'Nguyen Quang Bao',
        role: 'Web Developer',
        skills: [
            'Graduated from FPT Polytechnic College',
            '2 years of experience in web development ',
            'Have strong interest in blockchain technology',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/nguyenquangbao'
        }]
    },
    {
        name: 'Nguyen Duc Hoang',
        role: 'Web Developer',
        skills: [
            'Graduated from FPT Polytechnic College',
            '3 years of experience in web development',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/hoangducpro'
        }]
    },
    {
        name: 'Phan Thanh Mai',
        role: 'CMO',
        skills: [
            'Graduated from Hanoi University of Science and Technology ',
            'MBA degree at National University of Economics ',
            '10 years of experience in managerial and global business development roles',
            'Director Of Strategic Partnerships at Vinsmart'
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://vn.linkedin.com/in/mai-phan-1b8a5354'
        }]
    },
    {
        name: 'Nguyen Trong Duong',
        role: 'Marketing Manager',
        skills: [
            'Graduated from Posts and Telecommunications Institute of Technology',
            '10 years of experience in marketing',
            'Content Writter Expert ',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/duongnt61'
        }]
    },
    {
        name: 'Nguyen Van Bach',
        role: 'Content Advisor',
        skills: [
            'Graduated from Hanoi University of Science and Technology with a bachelor degree and an IT engineer degree',
            '10 years working at several multi-national entrepreuners on sale and customer care of high-technology products',
            'Content Writter Expert',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/nguyen-van-bach-20357aa1'
        }]
    },
    {
        name: 'Than Thi Hoang Yen',
        role: 'Content Specialist',
        skills: [
            'Senior student at Hanoi University of Science and Technology (HUST)',
            ' Go-getter for innovative, novel, and sustainable ideas',
            'Experience in External Affairs, ELT, Public Relations',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://linkedin.com/in/yen-t-14005b119/'
        }]
    },
    {
        name: 'Lam Phuong Thao',
        role: 'Graphic Designer Leader',
        skills: [
            'Graduated from Open University majoring in Graphic Design',
            '10 years of experience in UI/UX and software designing',
            'Currently doing R&D in Blockchain technology.',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/thaolam3012'
        }]
    },
    {
        name: 'Nguyen Manh Cuong',
        role: 'Art Team Leader',
        skills: [
            'Graduated from Danang Architecture University ',
            '3 years of experience in graphic design ',
            '1 year of experience in illustration',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://linkedin.com/in/cuong-nguyen-586a54193'
        }]
    },

    {
        name: 'Do Thi Phuong Thao ',
        role: 'Designer',
        skills: [
            'Graduated from Hanoi University of Science.',
            '2 years of experience in business analyst',
            '1 year of experience in UI/UX desig',
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/phuongthao-Vaix'
        }]
    },
    {
        name: 'Bui Viet Duc',
        role: 'Financial Advisor',
        skills: [
            'Graduated from National University of Economics ',
            'COO of SKC Vietnam Group',
            '12 years of experience in financial sector at HomeCredit, FECredit, Mirae Asset',
            '8 years of experience in investment'
        ],
        photo: 'images/teams/team1.png',
        order: 7,
        social: [{
            name: 'linkedin',
            link: 'http://www.linkedin.com/in/buiviet-duc'
        }]
    },




]
const team = document.getElementById('team__content');

const component = (teams) => {
        let html = '';
        teams.map((item, index) => {
                    html +=
                        `<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 col-12 my-2">
                <div class="row">
                    <div class="col-lg-4 avatar ">
                        <img src="${item.photo}" alt="team-1" class=" img-fluid" />
                    </div>
                    <div class="col-lg-8 skills ">
                        <h5 class="fw-bold">
                            ${item.name}
                            ${item.social.map((social, index) => {
                                return `<a href="${social.link}" target="_blank" class="social-icon">
                                            <i class="fab fa-${social.name} social-icons" ></i>
                                        </a>`
                            })}
                        </h5>

                        <h6>${item.role}</h6>
                        <ul>
                        ${item.skills.map((skill, index) => {
                            return `<li>${skill}</li>`
                        }).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `
    }).sort((a, b) => {
        console.log(a.order, b.order);
        return a.order - b.order;
    });
    team.innerHTML = html;
}
component(TEAM_LIST);