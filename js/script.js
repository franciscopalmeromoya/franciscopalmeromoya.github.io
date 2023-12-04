// Sample project data (replace this with your actual projects)
// Sample project data (replace this with your actual projects)
// Sample project data (replace this with your actual projects)
const projects = [
    { 
        title: 'Lie Groups and Spinors', 
        category: 'physics', 
        description: "Bachelor's thesis in Physics where I studied the field of Lie groups with a special emphasis on SO(3) and SU(2) groups. The topological properties of such groups, together with their linear group representations, led us to understand the spinorial formalism.",
        imageUrl: 'img/SO3.png',
        links: [
            { label: 'Learn more', url: 'projects/physics/lie.html' },
            { label: 'PDF (Spanish)', url: 'files/bscthesis.pdf' },
            { label: 'PDF (English)', url: '' }
        ]
    },
    { 
        title: 'Bayesian Inference of open cluster ages', 
        category: 'ai', 
        description: 'The resulting model combines existent photometric, parallax, and chemical abundance of Lithium data sets of stars belonging to stellar open clusters to infer its age distribution through modern and robust artificial intelligence methods. The Bayesian hierarchical model not only facilitates simultaneous inference of star-level parameters but also offers an elegant framework for effectively pooling open cluster information and propagating uncertainty. Markov Chain Monte Carlo techniques allow us to sample the posterior distribution using the Hamiltonian Monte Carlo algorithm.',
        imageUrl: 'img/model.png',
        links: [
            { label: 'Learn more', url: 'projects/ai/biosc.html' },
            { label: 'GitHub', url: 'https://github.com/franciscopalmeromoya/biosc' }
        ]
    },
    { 
        title: 'A Genetic Algorithm approach for the Traveling Salesman Problem', 
        category: 'ai', 
        description: 'The Travelling Salesman Problem (TSP) is a well-known problem in computer science and operations research. It involves finding the shortest possible route that visits a given set of cities and returns to the starting city. This problem is NP-hard, meaning that it is very difficult to solve exactly, especially as the number of cities increases. One possible approach to solving the TSP is to use a Genetic Algorithm (GA). This involves representing the route as a string of numbers, with each number representing a city in the given set. The algorithm then uses principles of natural selection to evolve the string over many iterations, with the goal of finding the shortest possible rout',
        imageUrl: 'img/48path.png',
        links: [
            { label: 'PDF', url: 'files/tsp.pdf' },
            { label: 'GitHub', url: 'https://github.com/franciscopalmeromoya/TravellingSalesmanProblem' }
        ]
    },
    // Add more projects as needed
];



// Function to filter and display projects based on the selected category
function filterProjects(category) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        const contentContainer = document.createElement('div');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;
        contentContainer.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;
        contentContainer.appendChild(descriptionElement);

        const linksContainer = document.createElement('div');
        linksContainer.classList.add('project-links');

        project.links.forEach(link => {
            const linkButton = document.createElement('a');
            linkButton.textContent = link.label;
            linkButton.href = link.url;
            linkButton.target = '_blank'; // Open link in a new tab
            linkButton.classList.add('project-link');
            linksContainer.appendChild(linkButton);
        });

        contentContainer.appendChild(linksContainer);
        projectItem.appendChild(contentContainer);

        const imageElement = document.createElement('img');
        imageElement.src = project.imageUrl;
        imageElement.alt = project.title;
        projectItem.appendChild(imageElement);

        projectList.appendChild(projectItem);
    });

    // Remove the "active" class from all buttons
    const buttons = document.querySelectorAll('#project-filters button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add the "active" class to the clicked button
    const clickedButton = document.querySelector(`#project-filters button[data-category="${category}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

function showCitation(citationMessage) {
    alert(citationMessage);
}



// Load all projects by default after the DOM has fully loaded
window.onload = function() {
    filterProjects('all');
};
