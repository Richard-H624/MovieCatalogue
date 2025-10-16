function ratingClass(value) {
  if (value === undefined || value === null || value === '') return 'rating-none';
  const n = Number(value);
  if (Number.isNaN(n)) return 'rating-none';
  if (n >= 7.5) return 'rating-high';
  if (n >= 7.4) return 'rating-mid';
  if (n == 10.0) return 'rating-perfect';
  if (n == 0.0) return 'rating-unwatchable';
  return 'rating-low';
}

function formatRatingBadge(value, labelPrefix = '') {
  if (value === undefined || value === null || value === '') {
    return `<span class="rating-badge rating-none">${labelPrefix}N/A</span>`;
  }
  const n = Number(value);
  if (Number.isNaN(n)) return `<span class="rating-badge rating-none">${labelPrefix}N/A</span>`;
  // show 1 decimal:
  return `<span class="rating-badge ${ratingClass(n)}">${labelPrefix}${n.toFixed(1)}</span>`;
}