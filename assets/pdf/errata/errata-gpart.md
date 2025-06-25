## 🔧 Erratum: Correction to the Rayleigh Quotient Formulation in \[GPart: A GNN-enabled multilevel graph partitioner\]

**Publication:** *Proceedings of Design Automation Conference*
**Authors:** Magi Chen et al.
**Date of Correction:** June 25, 2025

---

### ❖ Description of the Issue

In our published paper, the **Spectral Consistency Loss** and related spectral alignment losses were originally defined using the **Rayleigh quotient** applied to the entire embedding matrix:

$$
R(\mathbf{X}, \mathbf{L}) = \frac{\mathbf{X}^\top \mathbf{L} \mathbf{X}}{\mathbf{X}^\top \mathbf{X}},
$$

where $\mathbf{X} \in \mathbb{R}^{n \times d}$ is the node embedding matrix and $\mathbf{L} \in \mathbb{R}^{n \times n}$ is the Laplacian matrix of the graph.

This formulation is mathematically **inappropriate**, as the Rayleigh quotient is conventionally defined for vector inputs. When applied to matrices, the numerator and denominator yield $d \times d$ matrices rather than scalars, making the comparison undefined in the context of scalar-valued loss functions.

---

### ❖ Correct Formulation

To resolve this issue, we revise the loss by computing the Rayleigh quotient **per embedding dimension**. Let $\mathbf{x}_{\cdot, i} \in \mathbb{R}^n$ denote the $i$-th column of $\mathbf{X}$. The corrected Spectral Consistency Loss is:

$$
\mathcal{L}_{\text{consistency}} = \frac{1}{d} \sum_{i=1}^{d} \text{MSE}\left( R(\mathbf{x}_{\text{fine},i}, \mathbf{L}),\ R(\mathbf{x}_{\text{recon},i}, \mathbf{L}) \right),
$$

where the Rayleigh quotient for vector $\mathbf{x}$ is defined as:

$$
R(\mathbf{x}, \mathbf{L}) = \frac{\mathbf{x}^\top \mathbf{L} \mathbf{x}}{\mathbf{x}^\top \mathbf{x}}.
$$

All related spectral losses—including the **Spectral Residual Loss**, **Fiedler Vector Approximation Loss**, and **Higher-Order Spectral Loss**—have been corrected to apply this per-dimension Rayleigh quotient formulation.

---

### ❖ Impact on Results

This correction ensures mathematical rigor and makes the loss formulation compatible with gradient-based optimization. Importantly, our actual implementation followed the correct (per-dimension) formulation, so the results and conclusions reported in the paper remain valid and unaffected.

---

**Magi Chen**
\magi-scholar@gradinnovate.com 

