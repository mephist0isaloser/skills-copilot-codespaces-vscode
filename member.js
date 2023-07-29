function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        addSkills: function (skill) {
            this.skills.push(skill);
        },
        getSkills: function () {
            return this.skills;
        }
    };
    return skills;
}