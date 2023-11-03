var papers = new Array (

     /*{
        id : "hdm13",
        name : "Sequential auctions of identical items with budget-constrained bidders",
        coauthors : new Array(authorList.Devanur, authorList.Malec),
        conference : "Manuscript",
        arxiv : "http://arxiv.org/abs/1209.1698",
        type : "g",
        paperAbstract : "<p>In this paper, we study sequential auctions with two budget constrained bidders and any number of identical items. All prior results on such auctions consider only two items. We construct a canonical outcome of the auction that is the only natural equilibrium and is unique under a refinement of subgame perfect equilibria. We show  certain interesting properties of  this equilibrium; for instance, we show that the prices decrease as the auction progresses. This phenomenon has been observed in many experiments and previous theoretic work attributed it to features such as uncertainty in the supply or risk averse bidders. We show that such features are not needed for this phenomenon and that it arises purely from the most essential features: budget constraints and the sequential nature of the auction. A little surprisingly we also show that in this equilibrium one agent wins all his items in the beginning and then the other agent wins the rest. The major difficulty in analyzing such sequential auctions has been in understanding how the selling prices of the first few rounds affect the utilities of the agents in the later rounds. We tackle this difficulty by identifying certain key properties of the auction and the proof is via a joint induction on all of them. </p>",
    },*/

    {
        id : "hjsswz23",
        name : "Online matching with stochastic rewards: advanced analyses using configuration linear programs",
        coauthors : new Array(authorList.JiangHanrui, authorList.ShenAocheng, authorList.WuZhiang, authorList.ZhangQiankun),
        conference : "WINE 2023",
        type : "o",
    },

    {
        id : "hlsw23",
        name : "Online Nash welfare maximization without predictions",
        coauthors : new Array(authorList.LiMinming, authorList.Shu, authorList.WeiTianze),
        conference : "WINE 2023",
        arxiv : "https://arxiv.org/abs/2211.03077",
        type : "go",
    },
    
    {
        id : "chmy23",
        name : "Strong revenue (non-)monotonicity of single-parameter auctions",
        coauthors : new Array(authorList.ChenZ, authorList.Majdi, authorList.YanZipeng),
        conference : "EC 2023",
        arxiv : "https://arxiv.org/abs/2205.08062",
        type : "g",
        paperAbstract : "<p>Consider Myerson's optimal auction with respect to an inaccurate prior, e.g., estimated from data, which is an underestimation of the true value distribution. Can the auctioneer expect getting at least the optimal revenue w.r.t. the inaccurate prior since the true value distribution is larger? This so-called strong revenue monotonicity is known to be true for single-parameter auctions when the feasible allocations form a matroid. We find that strong revenue monotonicity fails to generalize beyond the matroid setting, and further show that auctions in the matroid setting are the only downward-closed auctions that satisfy strong revenue monotonicity. On the flip side, we recover an approximate version of strong revenue monotonicity that holds for all single-parameter auctions, even without downward-closedness. As applications, we get sample complexity upper bounds for single-parameter auctions under matroid constraints, downward-closed constraints, and general constraints. They improve the state-of-the-art upper bounds and are tight up to logarithmic factors.</p>",
    },

    {
        id : "hhis23",
        name : "Class fairness in online matching",
        coauthors : new Array(authorList.Hosseini, authorList.Igarashi, authorList.Shah),
        conference : "AAAI 2023",
        arxiv : "https://arxiv.org/abs/2203.03751",
        type : "go",
        paperAbstract : "<p>In the classical version of online bipartite matching, there is a given set of offline vertices (aka agents) and another set of vertices (aka items) that arrive online. When each item arrives, its incident edges -- the agents who like the item -- are revealed and the algorithm must irrevocably match the item to such agents. We initiate the study of class fairness in this setting, where agents are partitioned into a set of classes and the matching is required to be fair with respect to the classes. We adopt popular fairness notions from the fair division literature such as envy-freeness (up to one item), proportionality, and maximin share fairness to our setting. Our class versions of these notions demand that all classes, regardless of their sizes, receive a fair treatment. We study deterministic and randomized algorithms for matching indivisible items (leading to integral matchings) and for matching divisible items (leading to fractional matchings). We design and analyze three novel algorithms. For matching indivisible items, we propose an adaptive-priority-based algorithm, MATCH-AND-SHIFT, prove that it achieves <em class=math>1/2</em>-approximation of both class envy-freeness up to one item and class maximin share fairness, and show that each guarantee is tight. For matching divisible items, we design a water-filling-based algorithm, EQUAL-FILLING, that achieves <em class=math>(1-1/e)</em>-approximation of class envy-freeness and class proportionality; we prove <em class=math>(1-1/e)</em> to be tight for class proportionality and establish a <em class=math>3/4</em> upper bound on class envy-freeness. Finally, we build upon EQUAL-FILLING to design a randomized algorithm for matching indivisible items, EQAUL-FILLING-OCS, which achieves 0.593-approximation of class proportionality. The algorithm and its analysis crucially leverage the recently introduced technique of online correlated selection (OCS) [Fahrbach et al., 2020].</p>",
    },

    {
        id : "hsy22",
        name : "The power of multiple choices in online stochastic matching",
        coauthors : new Array(authorList.Shu, authorList.YanShuyi),
        conference : "STOC 2022",
        arxiv : "http://arxiv.org/abs/2203.02883",
        type : "o",
        paperAbstract : "<p>We study the power of multiple choices in online stochastic matching. Despite a long line of research, existing algorithms still only consider two choices of offline neighbors for each online vertex because of the technical challenge in analyzing multiple choices. This paper introduces two approaches for designing and analyzing algorithms that use multiple choices. For unweighted and vertex-weighted matching, we adopt the online correlated selection (OCS) technique into the stochastic setting, and improve the competitive ratios to <em class=math>0.716</em>, from <em class=math>0.711</em> and <em class=math>0.7</em> respectively. For edge-weighted matching with free disposal, we propose the Top Half Sampling algorithm. We directly characterize the progress of the whole matching instead of individual vertices, through a differential inequality. This improves the competitive ratio to <em class=math>0.706</em>, breaking the <em class=math>1-1/e</em> barrier in this setting for the first time in the literature. Finally, for the harder edge-weighted problem without free disposal, we prove that no algorithms can be 0.703 competitive, separating this setting from the aforementioned three.</p>",
    },

    {
        id : "ghhnyz21",
        name : "Improved online correlated selection",
        coauthors : new Array(authorList.GaoRuiquan, authorList.HeZhongtian, authorList.NieZipei, authorList.YuanBijun, authorList.ZhongYan),
        conference : "FOCS 2021",
        arxiv : "https://arxiv.org/abs/2106.04224",
        type : "o",
        paperAbstract : "<p>This paper studies the online correlated selection (OCS) problem introduced by Fahrbach, Huang, Tao, and Zadimoghaddam (2020) to get the first edge-weighted online bipartite matching algorithm that breaks the <em class=math>0.5</em> barrier. Suppose that we receive a pair of elements in each round and select one of them. Can we select with negative correlation to be more effective than independent random selections? Our contributions are threefold. For semi-OCS, which considers the probability that an element remains unselected after appearing in k rounds, we give an optimal algorithm that minimizes this probability for all <em class=math>k</em>. It leads to 0.536-competitive unweighted and vertex-weighted online bipartite matching algorithms that randomize over only two options in each round, improving the previous <em class=math>0.508</em>-competitive ratio by Fahrbach et al. (2020). Further, we give the first multi-way semi-OCS that allows an arbitrary number of elements with arbitrary masses in each round. As an application, it rounds the Balance algorithm in unweighted and vertex-weighted online bipartite matching to get a <em class=math>0.593</em>-competitive ratio. This is the first algorithm other than Ranking whose competitive ratio is beyond the <em class=math>0.5+&epsilon;</em> regime. Finally, we study OCS, which further considers the probability that an element is unselected in any subset of rounds. We prove that the optimal 'level of negative correlation' is between <em class=math>0.167</em> and <em class=math>0.25</em>, improving the previous bounds of <em class=math>0.109</em> and <em class=math>1</em> by Fahrbach et al. (2020). Our OCS gives a <em class=math>0.519</em>-competitive edge-weighted online bipartite matching algorithm, improving the previous <em class=math>0.508</em>-competitive ratio by Fahrbach et al. (2020).</p>"
    },

    {
        id : "ghtz21",
        name : "Generalizing complex hypotheses on product distributions: auctions, prophet inequalities, and Pandora's problem",
        coauthors : new Array(authorList.Guo, authorList.Tang, authorList.ZhangXinzhi),
        conference : "COLT 2021",
        arxiv : "https://arxiv.org/abs/1911.11936",
        type : "g",
        paperAbstract : "<p>This paper explores a theory of generalization for learning problems on product distributions, complementing the existing learning theories in the sense that it does not rely on any complexity measures of the hypothesis classes. The main contributions are two general sample complexity bounds: (1) <em class=math>O(nk&epsilon;<sup>-2</sup>)</em> samples are sufficient and necessary for learning an <em class=math>&epsilon;</em>-optimal hypothesis in any problem on an n-dimensional product distribution, whose marginals have finite supports of sizes at most <em class=math>k</em>; (2) <em class=math>O(n&epsilon;<sup>-2</sup>)</em> samples are sufficient and necessary for any problem on <em class=math>n</em>-dimensional product distributions if it satisfies a notion of strong monotonicity from the algorithmic game theory literature. As applications of these theories, we match the optimal sample complexity for single-parameter revenue maximization (Guo et al., STOC 2019), improve the state-of-the-art for multi-parameter revenue maximization (Gonczarowski and Weinberg, FOCS 2018) and prophet inequality (Correa et al., EC 2019), and provide the first and tight sample complexity bound for Pandora's problem.</p>"
    },

    {
        id : "hhsw21",
        name : "Targeting makes sample efficiency in auction design",
        coauthors : new Array(authorList.HuYihang, authorList.ShenYiheng, authorList.WangX),
        conference : "EC 2021",
        arxiv : "https://arxiv.org/abs/2105.05123",
        type : "g",
        paperAbstract : "<p>This paper introduces the targeted sampling model in optimal auction design. In this model, the seller may specify a quantile interval and sample from a buyer's prior restricted to the interval. This can be interpreted as allowing the seller to, for example, examine the top 40% bids from previous buyers with the same characteristics. The targeting power is quantified with a parameter <em class=math>&Delta; &isin; [0, 1]</em> which lower bounds how small the quantile intervals could be. When <em class=math>&Delta; = 1</em>, it degenerates to the model of i.i.d. samples by Cole and Roughgarden (2014); when it is the idealized case of <em class=math>&Delta; = 0</em>, it degenerates to the model studied by Chen, Li, Li, and Lu (2018). For instance, for <em class=math>n</em> buyers with bounded values in <em class=math>[0, 1]</em>, <em class=math>O(&epsilon;<sup>-1</sup>)</em> targeted samples suffice while it is known that at least <em class=math>&Omega;(n&epsilon;<sup>-2</sup>)</em> i.i.d. samples are needed. In other words, targeted sampling with sufficient targeting power allows us to remove the linear dependence in <em class=math>n</em>, and to improve the quadratic dependence in <em class=math>&epsilon;<sup>-1</sup></em> to linear. In this work, we introduce new technical ingredients and show that the number of targeted samples sufficient for learning an <em class=math>&epsilon;</em>-optimal auction is substantially smaller than the sample complexity of i.i.d. samples for the full spectrum of <em class=math>&Delta; &isin; [0, 1)</em>. Even with only mild targeting power, i.e., whenever <em class=math>&Delta; = o(1)</em>, our targeted sample complexity upper bounds are strictly smaller than the optimal sample complexity of i.i.d. samples.</p>"
    },

    {
        id : "hs21",
        name : "Online stochastic matching, Poisson arrivals, and the natural linear program",
        coauthors : new Array(authorList.Shu),
        conference : "STOC 2021",
        arxiv : "https://arxiv.org/abs/2103.13024",
        type : "o",
        paperAbstract : "<p>We study the online stochastic matching problem. Consider a bipartite graph with offline vertices on one side, and with i.i.d. online vertices on the other side. The offline vertices and the distribution of online vertices are known to the algorithm beforehand. The realization of the online vertices, however, is revealed one at a time, upon which the algorithm immediately decides how to match it. For maximizing the cardinality of the matching, we give a <em class=math>0.711</em>-competitive online algorithm, which improves the best previous ratio of <em class=math>0.706</em>. When the offline vertices are weighted, we introduce a <em class=math>0.7009</em>-competitive online algorithm for maximizing the total weight of the matched offline vertices, which improves the best previous ratio of <em class=math>0.662i</em>.</p><p>Conceptually, we find that the analysis of online algorithms simplifies if the online vertices follow a Poisson process, and establish an approximate equivalence between this Poisson arrival model and online stochstic matching. Technically, we propose a natural linear program for the Poisson arrival model, and demonstrate how to exploit its structure by introducing a converse of Jensen’s inequality. Moreover, we design an algorithmic amortization to replace the analytic one in previous work, and as a result get the first vertex-weighted online stochastic matching algorithm that improves the results in the weaker random arrival model.</p>",
    },

    {
        id : "hzz20",
        name : "AdWords in a panorama",
        coauthors : new Array(authorList.ZhangQiankun, authorList.ZhangY),
        conference : "FOCS 2020",
        arxiv: "https://arxiv.org/abs/2009.04114",
        type : "o",
        paperAbstract : "<p>Three decades ago, Karp, Vazirani, and Vazirani (STOC 1990) defined the online matching problem and gave an optimal <em class=math>1-1/e</em>-competitive algorithm. Fifteen years later, Mehta, Saberi, Vazirani, and Vazirani (FOCS 2005) introduced the first generalization called AdWords driven by online advertising and obtained the optimal <em class=math>1-1/e</em> competitive ratio in the special case of small bids. It has been open ever since whether there is an algorithm for general bids better than the <em class=math>0.5</em>-competitive greedy algorithm. This paper presents a <em class=math>0.5016</em>-competitive algorithm for AdWords, answering this open question on the positive end. The algorithm builds on several ingredients, including a combination of the online primal dual framework and the configuration linear program of matching problems recently explored by Huang and Zhang (STOC 2020), a novel formulation of AdWords which we call the panorama view, and a generalization of the online correlated selection by Huang and Tao (2019) which we call the panoramic online correlated selection.</p>"
    },

    {
        id : "fhtz20",
        name : "Edge-weighted online bipartite matching",
        coauthors : new Array(authorList.Fahrbach, authorList.Tao, authorList.Zadimoghaddam),
        conference : "FOCS 2020",
        note : "Best Paper Award",
        arxiv : "https://arxiv.org/abs/2005.01929",
        type : "o",
        paperAbstract : "<p>Online bipartite matching and its variants are among the most fundamental problems in the online algorithms literature. Karp, Vazirani, and Vazirani (STOC 1990) introduced an elegant algorithm for the unweighted problem that achieves an optimal competitive ratio of <em class=math>1-1/e</em>. Later, Aggarwal et al. (SODA 2011) generalized their algorithm and analysis to the vertex-weighted case. Little is known, however, about the most general edge-weighted problem aside from the trivial <em class=math>1/2</em>-competitive greedy algorithm. In this paper, we present the first online algorithm that breaks the long-standing <em class=math>1/2</em> barrier and achieves a competitive ratio of at least <em class=math>0.5086</em>. In light of the hardness result of Kapralov, Post, and Vondr&aacute;k (SODA 2013) that restricts beating a <em class=math>1/2</em> competitive ratio for the more general problem of monotone submodular welfare maximization, our result can be seen as strong evidence that edge-weighted bipartite matching is strictly easier than submodular welfare maximization in the online setting.</p><p>The main ingredient in our online matching algorithm is a novel subroutine called online correlated selection (OCS), which takes a sequence of pairs of vertices as input and selects one vertex from each pair. Instead of using a fresh random bit to choose a vertex from each pair, the OCS negatively correlates decisions across different pairs and provides a quantitative measure on the level of correlation. We believe our OCS technique is of independent interest and will find further applications in other online optimization problems.</p>",
    },

    {
        id : "htwz20",
        name : "Fully online matching II: beating Ranking and Water-filling",
        coauthors : new Array(authorList.Tang, authorList.WuX, authorList.ZhangY),
        conference : "FOCS 2020",
        arxiv : "https://arxiv.org/abs/2005.06311",
        type : "o",
        paperAbstract : "<p>Karp, Vazirani, and Vazirani (STOC 1990) initiated the study of online bipartite matching, which has held a central role in online algorithms ever since. Of particular importance are the Ranking algorithm for integral matching and the Water-filling algorithm for fractional matching. Most algorithms in the literature can be viewed as adaptations of these two in the corresponding models. Recently, Huang et al. (STOC 2018, SODA 2019) introduced a more general model called <em>fully online matching</em>, which considers general graphs and allows all vertices to arrive online. They also generalized Ranking and Water-filling to fully online matching and gave some tight analysis: Ranking is <em class=math>0.567</em>-competitive on bipartite graphs, and Water-filling is <em class=math>0.585</em>-competitive on general graphs.</p><p>We propose fully online matching algorithms strictly better than Ranking and Water-filling. For integral matching on bipartite graphs, we build on the online primal dual analysis of Ranking and Water-filling to design a <em class=math>0.569</em>-competitive hybrid algorithm called Balanced Ranking. To our knowledge, it is the first integral algorithm in the online matching literature that successfully integrates ideas from Water-filling. For fractional matching on general graphs, we give a <em class=math>0.592</em>-competitive algorithm called Eager Water-filling, which may match a vertex on its arrival. By contrast, the original Water-filling algorithm always matches vertices at their deadlines. Our result for fractional matching further shows a separation between fully online matching and the general vertex arrival model by Wang and Wong (ICALP 2015), due to an upper bound of <em class=math>0.5914</em> in the latter model by Buchbinder, Segev, and Tkach (ESA 2017).</p>",
    },

    {
        id : "hz20",
        name : "Online primal dual meets online matching with stochastic rewards: configuration LP to the rescue",
        coauthors : new Array(authorList.ZhangQiankun),
        conference : "STOC 2020",
        arxiv : "https://arxiv.org/abs/2002.01802",
        type : "o",
        paperAbstract : "<p>Mehta and Panigrahi (FOCS 2012) introduce the problem of online matching with stochastic rewards, where edges are associated with success probabilities and a match succeeds with the probability of the corresponding edge. It is one of the few online matching problems that have defied the randomized online primal dual framework by Devanur, Jain, and Kleinberg (SODA 2013) thus far. This paper unlocks the power of randomized online primal dual in online matching with stochastic rewards by employing the configuration linear program rather than the standard matching linear program used in previous works. Our main result is a <em class=math>0.572</em> competitive algorithm for the case of vanishing and unequal probabilities, improving the best previous bound of <em class=math>0.534</em> by Mehta, Waggoner, and Zadimoghaddam (SODA 2015) and, in fact, is even better than the best previous bound of <em class=math>0.567</em> by Mehta and Panigrahi (FOCS 2012) for the more restricted case of vanishing and equal probabilities. For vanishing and equal probabilities, we get a better competitive ratio of <em class=math>0.576</em>. Our results further generalize to the vertex-weighted case due to the intrinsic robustness of the randomized online primal dual analysis.</p>",
    },

    {
        id : "cdhw20",
        name : "Algorithmic price discrimination",
        coauthors : new Array(authorList.Cummings, authorList.Devanur, authorList.WangX),
        conference : "SODA 2020",
        arxiv : "https://arxiv.org/abs/1912.05770",
        type : "g",
        paperAbstract : "<p>We consider a generalization of the third degree price discrimination problem studied in Bergemann et al. (2015), where an intermediary between the buyer and the seller can design market segments to maximize any linear combination of consumer surplus and seller revenue. Unlike in Bergemann et al. (2015), we assume that the intermediary only has partial information about the buyer's value. We consider three different models of information, with increasing order of difficulty. In the first model, we assume that the intermediary's information allows him to construct a probability distribution of the buyer's value. Next we consider the sample complexity model, where we assume that the intermediary only sees samples from this distribution. Finally, we consider a bandit online learning model, where the intermediary can only observe past purchasing decisions of the buyer, rather than her exact value. For each of these models, we present algorithms to compute optimal or near optimal market segmentation.</p>",
    },

    {
        id : "hz19",
        name : "Scalable and jointly differentially private packing",
        coauthors : new Array(authorList.Zhu),
        conference : "ICALP 2019",
        arxiv : "https://arxiv.org/abs/1905.00767",
        type : "p",
        paperAbstract : "<p>We introduce an <em class=math>(&epsilon;, &delta;)</em>-jointly differentially private algorithm for packing problems. Our algorithm not only achieves the optimal trade-off between the privacy parameter <em class=math>&epsilon;</em> and the minimum supply requirement (up to logarithmic factors), but is also scalable in the sense that the running time is linear in the number of agents <em class=math>n</em>. Previous algorithms either run in cubic time in <em class=math>n</em>, or require a minimum supply per resource that is <em class=math>&radic;n</em> times larger than the best possible.</p>",
    },

    {
        id : "ghz19",
        name : "Settling the sample complexity of single-parameter revenue maximization",
        coauthors : new Array(authorList.Guo, authorList.ZhangXinzhi),
        conference : "STOC 2019",
        arxiv : "https://arxiv.org/abs/1904.04962",
        type : "g",
        paperAbstract : "<p>This paper settles the sample complexity of single-parameter revenue maximization by showing matching upper and lower bounds, up to a poly-logarithmic factor, for all families of value distributions that have been considered in the literature. The upper bounds are unified under a novel framework, which builds on the strong revenue monotonicity by Devanur, Huang, and Psomas (STOC 2016), and an information theoretic argument. This is fundamentally different from the previous approaches that rely on either constructing an ϵ-net of the mechanism space, explicitly or implicitly via statistical learning theory, or learning an approximately accurate version of the virtual values. To our knowledge, it is the first time information theoretical arguments are used to show sample complexity upper bounds, instead of lower bounds. Our lower bounds are also unified under a meta construction of hard instances.</p>",
    },

    {
        id : "dwh19",
        name : "Learning resource allocation and pricing for cloud profit maximization",
        coauthors : new Array(authorList.Du, authorList.WuChuan),
        conference : "AAAI 2019",
        confVersion : "publications/DHW19-AAAI.pdf",
        type : "m",
    },

    {
        id : "hpttwz19",
        name : "Tight competitive ratios of classic matching algorithms in the fully online model",
        coauthors : new Array(authorList.Peng, authorList.Tang, authorList.Tao, authorList.WuX, authorList.ZhangY),
        conference : "SODA 2019",
        confVersion : "publications/HPTTWZ19-SODA.pdf",
        arxiv : "https://arxiv.org/abs/1810.07903",
        type : "o",
        paperAbstract : "<p>Huang et al. (STOC 2018) introduced the fully online matching problem, a generalization of the classic online bipartite matching problem in that it allows all vertices to arrive online and considers general graphs. They showed that the ranking algorithm by Karp et al. (STOC 1990) is strictly better than <em class=math>0.5</em>-competitive and the problem is strictly harder than the online bipartite matching problem in that no algorithms can be <em class=math>(1 - 1/e)</em>-competitive. This paper pins down two tight competitive ratios of classic algorithms for the fully online matching problem. For the fractional version of the problem, we show that a natural instantiation of the water-filling algorithm is <em class=math>2 - &radic;2 &asymp; 0.585</em>-competitive, together with a matching hardness result. Interestingly, our hardness result applies to arbitrary algorithms in the edge-arrival models of the online matching problem, improving the state-of-art <em class=math>11 + ln  2 &asymp; 0.5906</em> upper bound. For integral algorithms, we show a tight competitive ratio of <em class=math>&asymp; 0.567</em> for the ranking algorithm on bipartite graphs, matching a hardness result by Huang et al. (STOC 2018).</p>",
    },

    {
        id : "hlw18",
        name : "Learning optimal reserve price against non-myopic bidders",
        coauthors : new Array(authorList.Liu, authorList.WangX),
        conference : "NeurIPS 2018",
        confVersion : "publications/HLW18-NeurIPSpdf",
        arxiv : "https://arxiv.org/abs/1804.11060",
        type : "g",
        paperAbstract : "<p>We consider the problem of learning optimal reserve price in repeated auctions against non-myopic bidders, who may bid strategically in order to gain in future rounds even if the single-round auctions are truthful. Previous algorithms, e.g., empirical pricing, do not provide non-trivial regret rounds in this setting in general. We introduce algorithms that obtain small regret against non-myopic bidders either when the market is large, i.e., no bidder appears in a constant fraction of the rounds, or when the bidders are impatient, i.e., they discount future utility by some factor mildly bounded away from one. Our approach carefully controls what information is revealed to each bidder, and builds on techniques from differentially private online learning as well as the recent line of works on jointly differentially private algorithms.</p>",
    },

    {
        id : "hl18",
        name : "Optimal differentially private algorithms for <em class=math>k</em>-means clustering",
        coauthors : new Array(authorList.Liu),
        conference : "PODS 2018",
        confVersion : "publications/HL18-PODS.pdf",
        type : "p",
    },

    {
        id : "htwz18",
        name : "Online vertex-weighted bipartite matching: beating <em class=math>1-1/e</em> with random arrivals",
        coauthors : new Array(authorList.Tang, authorList.WuX, authorList.ZhangY),
        conference : "ICALP 2018",
        journal : "ACM Transactions on Algorithms (TALG)",
        confVersion : "publications/HTWZ18-ICALP.pdf",
        arxiv : "https://arxiv.org/abs/1804.07458",
        type : "o",
        paperAbstract : "<p>We introduce a weighted version of the ranking algorithm by Karp et al. (STOC 1990), and prove a competitive ratio of <em class=math>0.6534</em> for the vertex-weighted online bipartite matching problem when online vertices arrive in random order. Our result shows that random arrivals help beating the <em class=math>1 - 1/e</em> barrier even in the vertex-weighted case. We build on the randomized primal-dual framework by Devanur et al. (SODA 2013) and design a two dimensional gain sharing function, which depends not only on the rank of the offline vertex, but also on the arrival time of the online vertex. To our knowledge, this is the first competitive ratio strictly larger than <em class=math>1 - 1/e</em> for an online bipartite matching problem achieved under the randomized primal-dual framework. Our algorithm has a natural interpretation that offline vertices offer a larger portion of their weights to the online vertices as time goes by, and each online vertex matches the neighbor with the highest offer at its arrival.</p>",
    }, 

    {
        id : "hktwzz18",
        name : "How to match when all vertices arrive online",
        coauthors : new Array(authorList.Kang, authorList.Tang, authorList.WuX, authorList.ZhangY, authorList.Zhu),
        conference : "STOC 2018",
        confVersion : "publications/HKTWZZ18-STOC.pdf",
        arxiv : "https://arxiv.org/abs/1802.03905",
        type : "o",
        paperAbstract : "<p>We introduce a fully online model of maximum cardinality matching in which all vertices arrive online. On the arrival of a vertex, its incident edges to previously-arrived vertices are revealed. Each vertex has a deadline that is after all its neighbors' arrivals. If a vertex remains unmatched until its deadline, the algorithm must then irrevocably either match it to an unmatched neighbor, or leave it unmatched. The model generalizes the existing one-sided online model and is motivated by applications including ride-sharing platforms, real-estate agency, etc. We show that the Ranking algorithm by Karp et al. (STOC 1990) is <em class=math>0.5211</em>-competitive in our fully online model for general graphs. Our analysis brings a novel charging mechanic into the randomized primal dual technique by Devanur et al. (SODA 2013), allowing a vertex other than the two endpoints of a matched edge to share the gain. To our knowledge, this is the first analysis of Ranking that beats <em class=math>0.5</em> on general graphs in an online matching problem, a first step towards solving the open problem by Karp et al. (STOC 1990) about the optimality of Ranking on general graphs. If the graph is bipartite, we show that the competitive ratio of Ranking is between <em class=math>0.5541</em> and <em class=math>0.5671</em>. Finally, we prove that the fully online model is strictly harder than the previous model as no online algorithm can be <em class=math>0.6317 < 1 - 1/e</em>-competitive in our model even for bipartite graphs.</p>",
    },

    {
        id : "zwhl18",
        name : "Occupation-oblivious pricing of cloud jobs via online learning",
        coauthors : new Array(authorList.Zhang, authorList.WuChuan, authorList.Li),
        conference : "INFOCOM 2018",
        type : "m",
    },

    {
        id : "hz18",
        name : "Near optimal jointly private packing algorithms via dual multiplicative weight update",
        coauthors : new Array(authorList.Zhu),
        conference : "SODA 2018",
        confVersion : "publications/HZ18-SODA.pdf",
        type : "p",
        paperAbstract : "<p>We present an improved <em class=math>(&epsilon;, &delta;)</em> jointly differentially private algorithm for packing problems. Our algorithm gives a feasible output that is approximately optimal up to an <em class=math>&alpha;n</em> additive factor as long as the supply of each resource is at least <em class=math>&Otilde;(m<sup>1/2</sup>/&alpha;&epsilon;)</em>, where <em class=math>m</em> is the number of resources. This improves the previous result by Hsu et al. (SODA '16), which requires the total supply to be at least <em class=math>&Otilde;(m<sup>2</sup>/&alpha;&epsilon;)</em>, and only guarantees approximate feasibility in terms of total violation. Further, we complement our algorithm with an almost matching hardness result, showing that <em class=math>&Omega;(m<sup>1/2</sup>/&alpha;&epsilon;)</em> supply is necessary. Finally, we introduce an alternative approach that runs in linear time, is exactly truthful, can be implemented online, and can be <em class=math>&epsilon;</em>-jointly differentially private, but requires a larger supply of each resource.</p>",
    },

    {
        id : "hktwz18",
        name : "Online makespan minimization: the power of restart",
        coauthors : new Array(authorList.Kang, authorList.Tang, authorList.WuX, authorList.ZhangY),
        conference : "APPROX 2018",
        type : "o",
        arxiv : "https://arxiv.org/abs/1806.02207",
        paperAbstract : "<p>We consider the online makespan minimization problem on identical machines. Chen and Vestjens (ORL 1997) show that the largest processing time first (LPT) algorithm is <em class=math>1.5</em>-competitive. For the special case of two machines, Noga and Seiden (TCS 2001) introduce the SLEEPY algorithm that achieves a competitive ratio of <em class=math>1.382</em>, matching the lower bound by Chen and Vestjens (ORL 1997). Furthermore, Noga and Seiden note that in many applications one can kill a job and restart it later, and they leave an open problem whether algorithms with restart can obtain better competitive ratios. We resolve this long-standing open problem on the positive end. Our algorithm has a natural rule for killing a processing job: a newly-arrived job replaces the smallest processing job if 1) the new job is larger than other pending jobs, 2) the new job is much larger than the processing one, and 3) the processed portion is small relative to the size of the new job. With appropriate choice of parameters, we show that our algorithm improves the <em class=math>1.5</em> competitive ratio for the general case, and the <em class=math>1.382</em> competitive ratio for the two-machine case.</p>",
    },

    {
        id : "bdhn17",
        name : "Online auctions and multi-scale online learning",
        coauthors : new Array(authorList.Bubeck, authorList.Devanur, authorList.Niazadeh),
        conference : "EC 2017",
        journal : "Journal of Machine Learning Research (JMLR)",
        confVersion : "publications/BDHN17-EC.pdf",
        type : "go",
        paperAbstract : "<p>We consider revenue maximization in online auctions and pricing. A seller sells an identical item in each period to a new buyer, or a new set of buyers. For the online posted pricing problem, we show regret bounds that scale with the best fixed price, rather than the range of the values. We also show regret bounds that are almost scale free, and match the offline sample complexity, when comparing to a benchmark that requires a lower bound on the market share. These results are obtained by generalizing the classical learning from experts and multi-armed bandit problems to their multi-scale versions. In this version, the reward of each action is in a different range, and the regret w.r.t. a given action scales with its own range, rather than the maximum range.</p>",
    },

    {
        id : "chjkt17",
        name : "Online submodular maximization with free disposal: randomization beats 1/4 for partition matroids",
        coauthors : new Array(authorList.Chan, authorList.Jiang, authorList.Kang, authorList.Tang),
        conference : "SODA 2017",
        journal : "ACM Transactions on Algorithms (TALG)", 
        confVersion : "publications/CHJKT17-SODA.pdf",
        type : "o",
        paperAbstract : "<p>We study the online submodular maximization problem with free disposal under a matroid constraint. Elements from some ground set arrive one by one in rounds, and the algorithm maintains a feasible set that is independent in the underlying matroid. In each round when a new element arrives, the algorithm may accept the new element into its feasible set and possibly remove elements from it, provided that the resulting set is still independent. The goal is to maximize the value of the final feasible set under some monotone submodular function, to which the algorithm has oracle access. For <em class=math>k</em>-uniform matroids, we give a deterministic algorithm with competitive ratio at least <em class=math>0.2959</em>, and the ratio approaches roughly <em class=math>0.3178</em> as <em class=math>k</em> approaches infinity, improving the previous best ratio of <em class=math>0.25</em> by Chakrabarti and Kale (IPCO 2014), Buchbinder et al. (SODA 2015) and Chekuri et al. (ICALP 2015). We also show that our algorithm is optimal among a class of deterministic monotone algorithms that accept a new arriving element only if the objective is strictly increased. Further, we prove that no deterministic monotone algorithm can be strictly better than <em class=math>0.25</em>-competitive even for partition matroids, the most modest generalization of k-uniform matroids, matching the competitive ratio by Chakrabarti and Kale (IPCO 2014) and Chekuri et al. (ICALP 2015). Interestingly, we show that randomized algorithms are strictly more powerful by giving a (non-monotone) randomized algorithm for partition matroids with ratio roughly <em class=math>0.3178</em>.</p>",
    },

    {
        id : "abcccghknnp16",
        name : "Online algorithms for covering and packing problems with convex objectives",
        coauthors : new Array(authorList.Azar, authorList.Buchbinder, authorList.Chan, authorList.ChenS, authorList.Cohen, authorList.Gupta, authorList.Kang, authorList.Nagarajan, authorList.Naor, authorList.Panigrahi),
        conference : "FOCS 2016",
        confVersion : "publications/ABCCCGHKNNP16-FOCS.pdf",
        type : "o",
    },

    /*{
        id : "chk15",
        name : "Online convex covering and packing problems",
        coauthors : new Array(authorList.Chan, authorList.Kang),
        conference : "Manuscript",
        arxiv : "http://arxiv.org/abs/1502.01802",
        type : "o",
    },*/

    {
        id : "dhp16",
        name : "The sample complexity of auctions with side information",
        coauthors : new Array(authorList.Devanur, authorList.Psomas),
        conference : "STOC 2016",
        confVersion : "publications/DHP16-STOC.pdf",
        arxiv : "http://arxiv.org/abs/1511.02296",
        type : "g",
        paperAbstract : "<p>Traditionally, the Bayesian optimal auction design problem has been considered either when the bidder values are i.i.d, or when each bidder is individually identifiable via her value distribution. The latter is a reasonable approach when the bidders can be classified into a few categories, but there are many instances where the classification of bidders is a continuum. For example, the classification of the bidders may be based on their annual income, their propensity to buy an item based on past behavior, or in the case of ad auctions, the click through rate of their ads. We introduce an alternate model that captures this aspect, where bidders are a priori identical, but can be distinguished based (only) on some side information the auctioneer obtains at the time of the auction. We extend the sample complexity approach of Dhangwatnotai et al. and Cole and Roughgarden to this model and obtain almost matching upper and lower bounds. As an aside, we obtain a revenue monotonicity lemma which may be of independent interest. We also show how to use Empirical Risk Minimization techniques to improve the sample complexity bound of Cole and Roughgarden for the non-identical but independent value distribution case.</p>",
    },

    {
        id : "hhrw16",
        name : "Joinly private convex programming",
        coauthors : new Array(authorList.Hsu, authorList.Roth, authorList.Wu),
        conference : "SODA 2016",
        confVersion : "HHRW16-SODA.pdf",
        arxiv : "http://arxiv.org/abs/1411.0998",
        type : "gp",
        paperAbstract : "<p>In this paper we present an extremely general method for approximately solving a large family of convex programs where the solution can be divided between different agents, subject to joint differential privacy. This class includes multi-commodity flow problems, general allocation problems, and multi-dimensional knapsack problems, among other examples. The accuracy of our algorithm depends on the number of constraints that bind between individuals, but crucially, is nearly independent of the number of primal variables and hence the number of agents who make up the problem. As the number of agents in a problem grows, the error we introduce often becomes negligible.</p><p>We also consider the setting where agents are strategic and have preferences over their part of the solution. For any convex program in this class that maximizes social welfare, there is a generic reduction that makes the corresponding optimization approximately dominant strategy truthful by charging agents prices for resources as a function of the approximately optimal dual variables, which are themselves computed under differential privacy. Our results substantially expand the class of problems that are known to be solvable under both privacy and incentive constraints.</p>",
    },

    {
        id : "ddhp15",
        name : "Budget constraints in prediction markets",
        coauthors : new Array(authorList.Devanur, authorList.Dudik, authorList.Pennock),
        conference : "UAI 2015",
        confVersion : "publication/DDHP15-UAI.pdf",
        type : "g",
        paperAbstract : "<p>An automated market maker is a natural and common mechanism to subsidize information acquisition, revelation, and aggregation in a prediction market. The sought-after prediction aggregate is the equilibrium price. However, traders with budget constraints are restricted in their ability to impact the market price on their own. We give a detailed characterization of optimal trades in the presence of budget constraints in a prediction market with a cost-function-based automated market maker. As a concrete application of our characterization, we give sufficient conditions for a property we call budget additivity: two traders with budgets <em class=math>B</em> and <em class=math>B'</em> and the same beliefs would have a combined impact equal to a single trader with budget <em class=math>B + B'</em>. That way, even if a single trader cannot move the market much, a crowd of like-minded traders can have the same desired effect. The sufficient conditions amount to verifying that the payoff vectors at outcomes form \"acute angles\". Our analysis borrows heavily from techniques in convex analysis and builds on the geometric notion of Bregman divergence. We show that a generalization of the heavily-used logarithmic market scoring rule is budget additive for affinely independent payoffs, but the quadratic market scoring rule is not. Our results may be used both descriptively, to understand if a particular market maker is affected by budget constraints or not, and prescriptively, as a recipe to construct markets.</p>",
    },

    {
        id : "adhp14",
        name : "Speed scaling in the non-clairvoyant model",
        coauthors : new Array(authorList.Azar, authorList.Devanur, authorList.Panigrahi),
        conference : "SPAA 2015",
        confVersion : "publications/ADHP15-SPAA.pdf",
        type : "o",
        note : "Best Paper Award",
        paperAbstract: "<p>In recent years, there has been a growing interest in speed scaling algorithms, where a set of jobs need to be scheduled on a machine with variable speed so as to optimize the flow-times of the jobs and the energy consumed by the machine. A series of results have culminated in constant-competitive algorithms for this problem in the clairvoyant model, i.e., when job parameters are revealed on releasing a job (Bansal, Pruhs, and Stein, SODA 2007; Bansal, Chan, and Pruhs, SODA 2009). Our main contribution in this paper is the first constant-competitive speed scaling algorithm in the non-clairvoyant model, which is typically used in the scheduling literature to model practical settings where job volume is revealed only after the job has been completely processed. Unlike in the clairvoyant model, the speed scaling problem in the non-clairvoyant model is non-trivial even for a single job. Our non-clairvoyant algorithm is defined by using the existing clairvoyant algorithm in a novel inductive way, which then leads to an inductive analytical tool that may be of independent interest for other online optimization problems. We also give additional algorithmic results and lower bounds for speed scaling on multiple identical parallel machines.</p>",
    },

    {
        id : "hmr15",
        name : "Making the most of your samples",
        coauthors : new Array(authorList.Mansour, authorList.Roughgarden),
        conference : "EC 2015",
        confVersion : "publications/HMR15-EC.pdf",
        journal : "SIAM Journal on Computing (SICOMP)",
        arxiv : "http://arxiv.org/abs/1407.2479",
        type : "g",
        paperAbstract : "<p>We consider selling a good to a single buyer with a valuation drawn from an unknown distribution <em class=math>D</em>, and study the best-possible approximation of the expected revenue as a function of the available data, in the form of i.i.d. samples from <em class=math>D</em>. For example, the Bulow-Klemperer theorem shows how to obtain a <em class=math>1/2</em>-approximation with just one sample (by posting a price equal to the sample), assuming only that <em class=math>D</em> is a regular distribution. What is the optimal way to use one or multiple samples?</p> <p>Our first set of results quantifies the number of samples <em class=math>m</em> that are necessary and sufficient to obtain a <em class=math>(1-&#949;)</em>-approximation. For distributions that satisfy the monotone hazard rate (MHR) condition, we prove that <em class=math>&#937;(&#949;<sup>-3/2</sup>)</em> samples are necessary and that <em class=math>O(&#949;<sup>-3/2</sup> log &#949;<sup>-1</sup>)</em> samples are sufficient. Remarkably, this is fewer samples than is necessary to accurately estimate the expected revenue obtained by even a single reserve price! For regular distributions, where previous work shows that <em class=math>O(&#949;<sup>-3</sup>) log &#949;<sup>-1</sup>)</em> samples are sufficient for a <em class=math>1-&#949;)</em>-approximation, we provide a nearly matching lower bound of <em class=math>&#937;(&#949;<sup>-3</sup>)</em>. Our lower bound approach borrows tools from differential privacy and information theory, and we believe it could find further applications in auction theory.</p> <p>Our second set of results considers the single-sample case. For regular distributions, we prove that no pricing strategy is better than <em class=math>1/2</em>-approximate. For MHR distributions, however, we give a simple pricing strategy that guarantees expected revenue at least <em class=math>0.589</em> times the maximum possible.  We also prove that no pricing strategy achieves an approximation guarantee better than <em class=math>e/4 &#8776; .68</em>. Our positive results for these single-agent problems directly lead to improved multi-agent prior-independent mechanisms.</p>",
    },
    
    {
        id : "zhwll15",
        name : "Online auctions in IaaS clouds: welfare and profit maximization with server costs",
        coauthors : new Array(authorList.Zhang, authorList.WuChuan, authorList.Lau, authorList.Li),
        conference : "SIGMETRICS 2015",
        journal : "IEEE/ACM Transactions on Networking (ToN)",
        confVersion : "publications/ZHWLL15-SIGMETRICS.pdf",
        type : "m",
        paperAbstract : "<p></p>",
    },
    
    {
        id : "hk15",
        name : "Welfare maximization with production costs: a primal dual approach",
        coauthors : new Array(authorList.Kim),
        conference : "SODA 2015",
        confVersion : "publications/HK15-SODA.pdf",
        journal : "Games and Economic Behavior",
        arxiv : "https://arxiv.org/abs/1411.4384",
        type : "go",
        paperAbstract : "<p>We consider online combinatorial auctions with production costs proposed by Blum et al.. In this model, the agents arrive online, and the seller can produce arbitrary number of copies of each item paying a non-decreasing marginal cost per copy. The goal is to maximize social welfare less total production cost. We study this problem using the online primal dual framework. We propose online incentive compatible mechanisms for arbitrary production cost functions with the optimal competitive ratios, along with matching lower bound instances that apply to arbitrary online algorithms. Our positive results improve or match the results in several previous work, e.g., Bartal et al., Blum et al., and Buchbinder and Gonen. Our lower bounds apply to randomized algorithms and resolve an open problem by Buchbinder and Gonen.</p>",
    },
    
    {
        id : "h14a",
        name : "Online primal dual: beyond linear programs",
        conference : "ACM SIGACT News, Volume 45 Issue 4, December 2014",
        type : "o",
    },
    
    {
        id : "h14b",
        name : "Privacy preserving auctions",
        conference : "Encyclopedia of Algorithms 2014",
        type : "gp",
    },

    {
        id : "hhrrw14",
        name : "Private matchings and allocations",
        coauthors : new Array(authorList.Hsu, authorList.Roth, authorList.Roughgarden, authorList.Wu),
        conference : "STOC 2014",
        journal : "SIAM Journal on Computing (SICOMP)", 
        confVersion : "publications/HHRRW14-STOC.pdf",
        arxiv : "http://arxiv.org/abs/1311.2828",
        type : "gp",
        paperAbstract : "<p>We consider a private variant of the classical allocation problem: given <em>m</em> goods and <em>n</em> agents with individual, private valuation functions over bundles of goods, how can we partition the goods amongst the agents to maximize social welfare? Specifically, the valuation functions are sensitive information which the agents wish to keep private from arbitrary coalitions of other agents. An important special case is when each agent desires at most one good, and specifies her (private) value for each good: in this case, the problem is exactly the maximum-weight matching problem in a bipartite graph.</p><p>Private matching and allocation problems have not been considered in the differential privacy literature, and for good reason: they are plainly impossible to solve under the standard notion of differential privacy. Informally, the allocation must match agents to preferred goods in order to maximize social welfare, but this preference is exactly what agents wish to keep private! Therefore, we consider the problem under the recently introduced constraint of joint differential privacy: roughly, for any agent <em>i</em>, no coalition of agents excluding <em>i</em> should be able to learn about the valuation function of agent <em>i</em>. We first show that if there are a small number of identical copies of each good, then it is possible to efficiently and accurately solve the maximum weight matching problem while guaranteeing joint differential privacy. We then extend our techniques to the more general allocation problem, when bidder valuations satisfy the gross substitutes condition. Finally, we prove lower bounds demonstrating that the problem cannot be privately solved to non-trivial accuracy without requiring multiple copies of each type of good.</p>",
    },

    {
        id : "ar14",
        name : "Exploiting metric structure for efficient private query release",
        coauthors : new Array(authorList.Roth),
        conference : "SODA 2014",
        confVersion : "publications/HR14-SODA.pdf",
        arxiv : "http://arxiv.org/abs/1211.7302",
        type : "p",
        paperAbstract : "<p>We consider the problem of privately answering queries defined on databases which are collections of points belonging to some metric space. We give simple, computationally efficient algorithms for answering <em>distance queries</em> defined over an arbitrary metric. Distance queries are specified by points in the metric space, and ask for the average distance from the query point to the points contained in the database, according to the specified metric. Our algorithms run efficiently in the database size and the dimension of the space, and operate in both the online query release setting, and the offline setting in which they must in polynomial time generate a fixed data structure which can answer <em>all</em> queries of interest. This represents one of the first subclasses of linear queries for which <em>efficient</em> algorithms are known for the private query release problem, circumventing known hardness results for generic linear queries.</p>",
    },

    {
        id : "dh14",
        name : "Primal dual gives optimal energy efficient online algorithms",
        coauthors : new Array(authorList.Devanur),
        conference : "SODA 2014",
        journal : "ACM Transactions on Algorithms (TALG)",
        confVersion: "publications/DH14-SODA.pdf",
        talk: "https://www.dropbox.com/sc/uf7kwc9lrzv667r/8Tw1ELDnnN",
        type : "o",
        paperAbstract: "<p>We consider the problem of online scheduling of jobs on unrelated machines with dynamic speed scaling to minimize the sum of energy and weighted flow time. We give an algorithm with an <em>aymptotically optimal</em> competitive ratio for <em>arbitrary</em> power functions. (No earlier results handled arbitrary power functions for unrelated machines.) For power functions of the form <em class=math>f(s) = s<sup>&alpha;</sup></em> for some constant <em class=math>&alpha; > 1</em>, we get a competitive ratio of <em class=math>O(&alpha; / log &alpha;)</em>, improving upon a previous competitive ratio of <em class=math>O(&alpha;<sup>2</sup>)</em> by Anand et al. (SODA '12), along with a matching lower bound of <em class=math>&Omega;(&alpha; / log &alpha;)</em>. Further, in the resource augmentation model, with a <em class=math>1 + &epsilon;</em> speed up, we give a <em class=math>2(1 + 1/&epsilon;)</em> competitive algorithm, with essentially the same techniques, matching the bound of Anand et al. (SODA '12) for the special case of fixed speed unrelated machines. Unlike the previous results most of which used an amortized local competitiveness argument or dual fitting methods, we use a primal-dual method, which is useful not only to analyze the algorithms but also to design the algorithm itself.</p>",
    },

    {
        id : "dhkmy13-ec",
        name : "Whole-page optimization and submodular welfare maximization with online bidders",
        coauthors : new Array(authorList.Devanur, authorList.Korula, authorList.Mirrokni, authorList.Yan),
        conference : "EC 2013",
        confVersion : "publications/DHKMY13-EC.pdf",
        journal : "ACM Transactions on Economics and Computation (TEAC), special issue for EC 2013",
        type : "go",
        paperAbstract : "<p>In the context of online ad serving, display ads may appear on different types of web-<em>pages</em>, where each page includes <em>several</em> ad slots and therefore multiple ads can be shown on each page. The set of ads that can be assigned to ad slots of the same page needs to satisfy various pre-specified constraints including exclusion constraints, diversity constraints, and the like. Upon arrival of a user, the ad serving system needs to allocate a set of ads to the current web-page respecting these per-page allocation constraints. Previous slot-based settings ignore the important concept of a page, and may lead to highly suboptimal results in general. In this paper, motivated by these applications in display advertising and inspired by the submodular welfare maximization problem with online bidders, we study a general class of page-based ad allocation problems, present the first (tight) constant-factor approximation algorithms for these problems, and confirm the performance of our algorithms experimentally on real-world data sets.</p><p>A key technical ingredient of our results is a novel primal-dual analysis for handling free-disposal, which updates dual variables using a \"level function\" instead of a single level, and unifies with previous analyses of related problems. This new analysis method allows us to handle arbitrarily complicated allocation constraints for each page. Our main result is an algorithm that achieves a <em class=math>1-1/e-o(1)</em> competitive ratio. Moreover, our experiments on real-world data sets show significant improvements of our page-based algorithms compared to the slot-based algorithms.</p><p>Finally, we observe that our problem is closely related to the submodular welfare maximization (SWM) problem. In particular, we introduce a variant of the SWM problem with online bidders, and show how to solve this problem using our algorithm for whole page optimization.</p>",
    },

    {
        id : "dissertation",
        name : "New techniques for computation over private data",
        conference : "Dissertation",
        note : "Morris and Dorothy Rubinoff Award",
        type : "t",
    },

    {
        id : "ch13-soda",
        name : "Simple and nearly optimal multi-item auction",
        coauthors : new Array(authorList.Cai),
        conference : "SODA 2013",
        confVersion : "publications/CH13-SODA.pdf",
        arxiv : "http://arxiv.org/abs/1210.3560",
        type : "g",
        paperAbstract : "<p>We provide a PTAS for the Bayesian optimal multi-item multi-bidder auction problem under two conditions. First, bidders are independent, have additive valuations and are from the same population. Second, every bidder's value distributions of items are independent but not necessarily identical monotone hazard rate distributions. For non-i.i.d. bidders, we also provide a PTAS when the number of bidders is small. Prior to our work, even for a single bidder, only constant factor approximations are known.</p><p>Another appealing feature of our mechanism is the simple allocation rule. Indeed, the mechanism we use is either the second-price auction with reserve price on every item individually, or VCG allocation with a few outlying items that requires additional treatments. It is surprising that such simple allocation rules suffice to obtain nearly optimal revenue.</p>",
    },
    
    {
        id : "hk12-focs",
        name : "The exponential mechanism for social welfare: private, truthful, and nearly optimal",
        coauthors : new Array(authorList.Kannan),
        conference : "FOCS 2012",
        confVersion : "publications/HK12-FOCS.pdf",
        arxiv : "http://arxiv.org/abs/1204.1255",
        slides : "slides/HK12-FOCS.pdf",
        type : "gp",
        paperAbstract : "<p>In this paper we show that for <em>any</em> mechanism design problem with the objective of maximizing social welfare, the exponential mechanism can be implemented as a <em>truthful</em> mechanism while still preserving differential privacy. Our instantiation of the exponential mechanism can be interpreted as a generalization of the VCG mechanism in the sense that the VCG mechanism is the extreme case when privacy is not a concern at all. To our knowledge, this is the first general tool for designing mechanisms that are both truthful and differentially private.</p>",
    },

    {
        id : "ch12-icalp",
        name : "Testing coverage functions",
        coauthors : new Array(authorList.Chakrabarty),
        conference : "ICALP 2012",
        journal : "SIAM Journal on Discrete Mathematics (SIDMA)",
        confVersion : "publications/CH12-ICALP.pdf",
        arxiv : "http://arxiv.org/abs/1205.1587",
        type : "m",
        paperAbstract : "<p>A <em>coverage function</em> <em class=math>f</em> over a ground set <em class=math>[m]</em> is associated with a universe <em class=math>U</em> of weighted elements and <em class=math>m</em> sets <em class=math>A<sub>1</sub>, ... , A<sub>m</sub> &sube; U</em>, and for any <em class=math>T &sube; [m]</em>, <em class=math>f(T)</em> is defined as the total weight of the elements in the union <em class=math>&cup;<sub>j&isin;T</sub> A<sub>j</sub></em>. Coverage functions are an important special case of submodular functions, and arise in many applications, for instance as a class of utility functions of agents in combinatorial auctions.</p><p>Set functions such as coverage functions often lack succinct representations, and in algorithmic applications, an access to a value oracle is assumed. In this paper, we ask whether one can test if a given oracle is that of a coverage function or not. We demonstrate an algorithm which makes <em class=math>O(m |U|)</em> queries to an oracle of a coverage function and completely reconstructs it. This gives a polytime tester for <em>succinct</em> coverage functions for which <em class=math>|U|</em> is polynomially bounded in <em class=math>m</em>. In contrast, we provide evidence that the testing question may be hard for non-succinct coverage functions. In particular, we prove that there exist functions which are not coverage whose certificate of `non-coverageness' requires exponential size. These functions far from being coverage under a suitable notion of distance, but require <em class=math>2<sup>&Theta;&#126;(m)</sup></em> queries to distinguish it from the class of coverage functions.</p>",
    },

    {
        id : "hkk11-focs",
        name : "Algorithms for the generalized sorting problem",
        coauthors : new Array(authorList.Kannan, authorList.Khanna),
        conference : "FOCS 2011",
        confVersion : "publications/HKK11-FOCS.pdf",
        slides : "slides/HKK11-FOCS.pptx",
        type : "m",
        paperAbstract : "<p>We study the <em>generalized sorting</em> problem where we are given a set of <em class=math>n</em> elements to be sorted but only a subset of all possible pairwise element comparisons is allowed. The goal is to determine the sorted order using the smallest possible number of allowed comparisons. The generalized sorting problem may be equivalently viewed as follows. Given an undirected graph <em class=math>G(V, E)</em> where <em class=math>V</em> is the set of elements to be sorted and <em class=math>E</em> defines the set of allowed comparisons, adaptively find the smallest subset <em class=math>E' &sube; E</em> of edges to probe such that the directed graph induced by <em class=math>E'</em> contains a Hamiltonian path.</p><p>When <em class=math>G</em> is a complete graph, we get the standard sorting problem, and it is well-known that <em class=math>&Theta;(n log n)</em> comparisons are necessary and sufficient. An extensively studied special case of the generalized sorting problem is the nuts and bolts problem where the allowed comparison graph is a complete bipartite graph between two equal-size sets. It is known that for this special case also, there is a deterministic algorithm that sorts using <em class=math>&Theta;(n log n)</em> comparisons. However, when the allowed comparison graph is arbitrary, to our knowledge, no bound better than the trivial <em class=math>O(n<sup>2</sup>)</em> bound is known. Our main result is a randomized algorithm that sorts any allowed comparison graph using <em class=math>O&#126;(n<sup>3/2</sup>)</em> comparisons with high probability (provided the input is sortable). We also study the sorting problem in randomly generated allowed comparison graphs, and show that when the edge probability is <em class=math>p</em>, <em class=math>O&#126;(min {n/p<sup>2</sup>, n<sup>3/2</sup>&radic;p})</em> comparisons suffice on average to sort.</p>",
    },

    {
        id : "bh11-soda",
        name : "Bayesian incentive compatibility via fractional assignments",
        coauthors : new Array(authorList.Bei),
        conference : "SODA 2011",
        confVersion : "publications/BH11-SODA.pdf",
        arxiv : "http://arxiv.org/abs/1005.4244",
        slides : "slids/BH11-SODA.pptx",
        type : "g",
        paperAbstract : "<p>Hartline and Lucier (STOC 2010) studied single-parameter mechanism design problems in the Bayesian setting. They proposed a black-box reduction that converted Bayesian approximation algorithms into Bayesian incentive compatible (BIC) mechanisms and preserved the expected social welfare. It remains a open question if one can find similar reduction in the more important multi-parameter setting. In this paper, we give positive answer to this question when the prior distribution has finite and small support. We propose a black-box reduction for designing BIC multi-parameter mechanisms. The reduction converts any algorithm into an <em class=math>&epsilon;</em>-BIC mechanism with only marginal loss in social welfare. As a result, for combinatorial auctions with sub-additive agents we get an <em class=math>&epsilon;</em>-BIC mechanism that achieves constant approximation.</p>",
    },

    {
        id : "hwz11-approx",
        name : "Black-box reductions in mechanism design",
        coauthors : new Array(authorList.Wang, authorList.Zhou),
        conference : "APPROX 2011",
        confVersion : "publications/HWZ11-APPROX.pdf",
        type : "g",
        paperAbstract : "<p>A central question in algorithmic mechanism design is to understand the additional difficulty introduced by truthfulness requirements in the design of approximation algorithms for social welfare maximization. In this paper, by studying the problem of single-parameter combinatorial auctions, we obtain the first black-box reduction that converts <em>any</em> approximation algorithm to a truthful mechanism with essentially the <em>same</em> approximation factor in a prior-free setting. In fact, our reduction works for the more general class of <em>symmetric single-parameter</em> problems. Here, a problem is symmetric if its allocation space is closed under permutations.</p><p>As extensions, we also take an initial step towards exploring the power of black-box reductions for general single-parameter and multi-parameter problems by showing several positive and negative results. We believe that the algorithmic and game theoretic insights gained from our approach will help better understand the tradeoff between approximability and incentive compatibility.</p>",
    },

    {
        id : "hk11-random",
        name : "On sampling from multivariate distribution",
        coauthors : new Array(authorList.Kannan),
        conference : "RANDOM 2011",
        confVersion : "publications/HK11-RANDOM.pdf",
        type : "m",
        paperAbstract : "<p>Let <em class=math>X<sub>1</sub>, ... , X<sub>n</sub></em> be a set of random variables. Suppose that in addition to the prior distributions of these random variables we are also given <em>linear constraints relating them</em>.  We ask for necessary and sufficient conditions under which we can efficiently sample the constrained distributions, find constrained marginal distributions for each of the random variables, etc. We give a tight characterization of the conditions under which this is possible. The problem is motivated by a number of scenarios where we have separate probabilistic inferences in some domain, but domain knowledge allows us to relate these inferences. When the joint prior distribution is a product distribution, the linear constraints have to be carefully chosen and are crucial in creating the lower bound instances. No such constraints are necessary if arbitrary priors are allowed.</p>",
    },

    {
        id : "chk09-focs",
        name : "Dynamic and non-uniform pricing strategies for revenue maximization",
        coauthors : new Array(authorList.Chakraborty, authorList.Khanna),
        conference : "FOCS 2009",
        journal: "SIAM Journal on Computing (SICOMP), special issue for FOCS 2009",
        confVersion : "publications/CHK09-FOCS.pdf",
        arxiv : "http://arxiv.org/abs/0905.3191",
        slides : "slides/CHK09-FOCS.ppt",
        type : "g",
        paperAbstract : "<p>We study the <em>item pricing</em> problem for revenue maximization in the limited supply setting, where a single seller with <em class=math>n</em> distinct items caters to <em class=math>m</em> buyers with <em>unknown</em> subadditive valuation functions who arrive in a sequence. The seller sets the prices on individual items. Each buyer buys a subset of yet unsold items that maximizes her utility.</p><p>Our main result is a <em>dynamic uniform pricing strategy</em> (all items are identically priced but item prices can change over time), that achieves an approximation ratio of <em class=math>O(log<sup>2</sup> n)</em>. We also show a lower bound of <em class=math>&Omega;((log n / loglog n)<sup>2</sup>)</em> for this class of strategies. Our strategy is simple to implement, and in particular, one strategy is to smoothly decrease the price over time.</p>",
    },

    {
        id : "gh09-icalp",
        name : "Revisiting the direct sum theorem and space lower bounds in random order streams",
        coauthors : new Array(authorList.Guha),
        conference : "ICALP 2009",
        confVersion : "publications/GH09-ICALP.pdf",
        slides : "slides/GH09-ICALP.pptx",
        type : "m",
        paperAbstract : "<p>Estimating frequency moments and <em class=math>L<sub>p</sub></em> distances are well studied problems in the adversarial data stream model and tight space bounds are known for these two problems. There has been growing interest in revisiting these problems in the framework of random-order streams. The best space lower bound known for computing the <em class=math>k</em>-th frequency moment in random-order streams is <em class=math>&Omega;(n<sup>1-2.5/k</sup>)</em> by Andoni et al. (arXiv), and it is conjectured that the real lower bound shall be <em class=math>&Omega;(n<sup>1-2/k</sup>)</em>. In this paper, we resolve this conjecture. In our approach, we revisit the direct sum theorem developed by Bar-Yossef et al. (JCSS 2004) in a random-partition private messages model and provide a tight <em class=math>&Omega;(n<sup>1-2/k</sup> / l)</em> space lower bound for any <em class=math>l</em>-pass algorithm that approximates the frequency moment in random-order stream model to a constant factor.</p>",
    },

    {
        id : "chk09-isaac",
        name : "Reconstructing numbers from pairwise function values",
        coauthors : new Array(authorList.Chen, authorList.Kannan),
        conference : "ISAAC 2009",
        confVersion : "publications/CHK09-ISAAC.pdf",
        type : "m",                        
        paperAbstract : "<p>The turnpike problem is one of the few \"natural\" problems that are neither known to be NP-complete nor solvable by efficient algorithms. We seek to study this problem in a more general setting. We consider the generalized problem which tries to resolve set <em class=math>A = {a<sub>1</sub>, ... , a<sub>n</sub>}</em> from pairwise function values <em class=math>f(a<sub>i</sub>, a<sub>j</sub>)</em>, <em class=math>1 &le; i, j &le; n</em> for any given bivariate function <em class=math>f</em>. We call this problem the <em>number reconstruction</em> problem. Our results include efficient algorithms when <em class=math>f</em> is monotone and non-trivial bounds on the number of solutions when <em class=math>f</em> is the sum. We also generalize previous backtracking and algebraic algorithms for the turnpike problem such that they work for the family of anti-monotone functions and linear-decomposable functions. Finally, we propose an efficient algorithm for the string reconstruction problem which is related to an approach to protein reconstruction and hence resolve an open problem proposed by Das et al. (Information Theory and Applications Workshop 2009).</p>",
    }
);
