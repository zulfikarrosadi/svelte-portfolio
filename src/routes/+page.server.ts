import portfolioData from '$lib/portfolioData.json';

export function load() {
  return {
    portfolio: portfolioData
  };
}
