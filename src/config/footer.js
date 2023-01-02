import { twitterIcon, youtubeIcon, githubIcon, instagramIcon } from "../icons/icons";


export const footerSocials = [
  // {
  //   url: 'https://instagram.com/',
  //   icon: instagramIcon,
  // },
  // {
  //   url: 'https://youtube.com/',
  //   icon: youtubeIcon,
  // },
  // {
  //   url: 'https://twitter.com/littlesticksdev',
  //   icon: twitterIcon,
  // },
  {
    url: 'https://github.com/start-ops',
    icon: githubIcon,
  },
]

export const footerLists = [
	{title: '', items: []}, // Empty list to push the Company list to the third and last column
	{title: '', items: []}, // Empty list to push the Company list to the third and last column
	{
		title: 'Company',
		items: [
			{
				title: 'GitHub',
				slug: 'https://github.com/start-ops',
			},
			{
				title: 'Get Started',
				slug: '/contact',
			},
		],
	}
];
