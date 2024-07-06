const blogDetails = [
  {
    id: 1,
    title: "Exploring the  Nature",
    description: "Join us as we delve into the beauty and mystery of the natural world. From breathtaking landscapes to fascinating wildlife, discover the wonders that nature has to offer.",
    details: "Nature is full of incredible sights and sounds that captivate the senses. In this blog, we'll explore some of the most stunning natural wonders, from majestic mountains to serene forests. We'll also take a closer look at the diverse wildlife that inhabits these environments, and learn about the delicate balance that sustains life on our planet. Whether you're a seasoned nature enthusiast or just starting to explore the great outdoors, this blog has something for everyone.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "The Art of Minimalist Living",
    description: "Learn how to simplify your life and embrace the minimalist lifestyle. Discover tips and tricks for decluttering your home and mind.",
    details: "Minimalism is about more than just getting rid of stuff. It's a mindset that can help you focus on what's truly important in life. In this blog, we'll explore different aspects of minimalist living, from decluttering your physical space to simplifying your daily routines. Whether you're looking to reduce stress, save money, or just live more intentionally, you'll find plenty of inspiration and practical advice here.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Healthy Eating Made Easy",
    description: "Discover simple and delicious recipes that will help you eat healthier without sacrificing flavor. Tips for meal planning and nutrition included.",
    details: "Eating healthy doesn't have to be complicated or boring. With a little planning and some creative recipes, you can enjoy delicious meals that are also good for you. This blog is packed with healthy eating tips, from meal planning strategies to nutrition advice. Whether you're a seasoned cook or just starting out in the kitchen, you'll find plenty of inspiration to help you make healthier choices.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Travel on a Budget",
    description: "Explore the world without breaking the bank. Tips and tricks for budget travel, including affordable destinations and money-saving hacks.",
    details: "Traveling on a budget doesn't mean you have to miss out on amazing experiences. In this blog, we'll share tips and tricks for affordable travel, from finding cheap flights and accommodations to discovering budget-friendly destinations. Whether you're planning a weekend getaway or a long-term adventure, you'll find plenty of advice to help you make the most of your travel budget.",
    image: "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Mastering the  Photography",
    description: "Unlock your creative potential with photography tips and techniques. Learn how to take stunning photos, no matter your skill level.",
    details: "Photography is a powerful way to capture and share the beauty of the world around us. Whether you're a beginner or an experienced photographer, there's always something new to learn. In this blog, we'll cover everything from basic camera settings to advanced techniques for capturing stunning images. You'll also find tips for editing and sharing your photos, as well as inspiration for your next photography project.",
    image: "https://images.unsplash.com/photo-1509518408633-d42f618a2bdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "The Joy of Gardening",
    description: "Cultivate your green thumb with gardening tips and tricks. From planting to harvesting, learn how to grow your own garden.",
    details: "Gardening is a rewarding hobby that can bring beauty and bounty to your home. Whether you're growing flowers, vegetables, or herbs, there's always something new to learn. In this blog, we'll share tips and tricks for successful gardening, from choosing the right plants for your climate to maintaining your garden throughout the seasons. You'll also find inspiration for creating beautiful garden spaces, as well as advice for dealing with common gardening challenges.",
    image: "https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "DIY Home Improvement",
    description: "Transform your living space with DIY home improvement projects. Step-by-step guides and tips for every skill level.",
    details: "Home improvement projects can be a great way to enhance your living space and increase the value of your home. In this blog, we'll share step-by-step guides for a variety of DIY projects, from simple repairs to major renovations. Whether you're looking to update a single room or tackle a whole-house makeover, you'll find plenty of inspiration and practical advice here.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    title: "Fitness for Everyone",
    description: "Get fit and stay healthy with workout tips and routines for all fitness levels. Learn how to create a fitness plan that works for you.",
    details: "Staying fit and healthy is important for overall well-being, but it can be challenging to find the right workout routine. In this blog, we'll share fitness tips and routines for all levels, from beginners to advanced athletes. You'll learn how to create a personalized fitness plan, set achievable goals, and stay motivated. Whether you prefer to work out at home or at the gym, you'll find plenty of advice to help you reach your fitness goals.",
    image: "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Mindfulness and Meditation",
    description: "Discover the benefits of mindfulness and meditation. Learn techniques for reducing stress and improving mental clarity.",
    details: "Mindfulness and meditation are powerful tools for reducing stress and improving mental clarity. In this blog, we'll explore different mindfulness and meditation techniques, from basic breathing exercises to advanced practices. You'll learn how to incorporate mindfulness into your daily routine, and discover the many benefits of a regular meditation practice. Whether you're new to meditation or have been practicing for years, you'll find plenty of inspiration and practical advice here.",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }]

  export default blogDetails;

  export const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact Us', path: '/Contact' },
    { id: 4, name: 'Blog', path: '/Blogpages' }
  ];