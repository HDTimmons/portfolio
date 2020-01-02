class Github {
    constructor() {
      /* I left my client id and secret active for the functionality of this app */
      this.client_id = '6d4832ec1049b4a860fb';
      this.client_secret = 'dd68fbc56789366d144eaf7bc263209f1d047ef6';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }